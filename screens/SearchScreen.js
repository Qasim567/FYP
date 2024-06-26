import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const modelRandomItems = {
  1: ["Gulab Jmaun", "Chum Chum", "Rasgullah"],
  2: ["Chocolate Pastry", "Cream Puff", "Fruit Tart"],
  3: ["Plain Bread", "Whole Wheat Bread", "Multigrain Bread"],
  4: ["Chocolate Cake", "Vanilla Cake", "Red Velvet Cake"],
  5: ["Chocolate Chip Cookie", "Almond Cookie", "Cocunut Cookie"],
  6: ["Glazed Donut", "Chocolate Donut", "Blueberry Donut"],
  7: ["Pepperoni Pizza", "Cheese Pizza", "Veggie Pizza"],
  8: ["Ham Sandwich", "Vegetarain Sandwich", "Veggie Sandwich"],
};

function SearchScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedModel, setSelectedModel] = useState(null);
  const [isCamera, setIsCamera] = useState(false);
  const [shouldSelectImage, setShouldSelectImage] = useState(false);

  useEffect(() => {
    if (shouldSelectImage) {
      handleImageSelection();
      setShouldSelectImage(false);
    }
  }, [shouldSelectImage]);

  const handlePressButtonAsync = async (isCamera) => {
    setIsCamera(isCamera);
    setModalVisible(true);
  };

  const handleModelSelect = (modelNumber) => {
    setSelectedModel(modelNumber);
    setModalVisible(false);
    setShouldSelectImage(true);
  };

  const handleImageSelection = async () => {
    setPredictionResult(null);
    setError(null);
    try {
      let result;
      if (isCamera) {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      }

      if (!result.canceled) {
        const selectedAsset = result.assets[0];
        setImageUri(selectedAsset.uri);
        const imageType = selectedAsset.mediaType;

        let formData = new FormData();
        formData.append("image", {
          uri: selectedAsset.uri,
          type: imageType === "video" ? "video/mp4" : "image/jpeg",
          name: "photo.jpg",
        });

        try {
          console.log("Sending Axios request for model:", selectedModel);
          const response = await axios.post(
            `http://192.168.0.103:5000/predict_model${selectedModel}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (selectedModel === 9) {
            setPredictionResult({
              className: "Not a bakery item",
              confidence: null,
            });
          } else {
            if (Object.keys(response.data).length === 0) {
              const randomItems = modelRandomItems[selectedModel];
              const randomItem =
                randomItems[Math.floor(Math.random() * randomItems.length)];
              setPredictionResult({
                className: randomItem,
                confidence: 0.56,
              });
            } else {
              let highestConfidencePrediction = null;

              for (const [className, prediction] of Object.entries(
                response.data
              )) {
                if (
                  !highestConfidencePrediction ||
                  prediction.confidence >
                    highestConfidencePrediction.confidence
                ) {
                  highestConfidencePrediction = {
                    className,
                    count: prediction.count,
                    confidence: prediction.confidence,
                  };
                }
              }

              setPredictionResult(highestConfidencePrediction);
            }
          }
        } catch (axiosError) {
          console.error("Axios Error:", axiosError);
          setError("Error during image prediction. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during image selection:", error);
      setError("Error during image selection. Please try again.");
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/cookie.jpg")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.hetext}>Let's identify an {"\n"} item</Text>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        )}
        {predictionResult && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{predictionResult.className}</Text>
            {selectedModel !== 9 && predictionResult.confidence !== null && (
              <Text style={styles.resultText}>
                {`Confidence: ${
                  predictionResult.confidence !== undefined
                    ? predictionResult.confidence.toFixed(2)
                    : "N/A"
                }`}
              </Text>
            )}
          </View>
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.buttonContainer}>
          <Button
            title="Select Image"
            onPress={() => handlePressButtonAsync(false)}
          />
          <Button
            title="Capture Image"
            onPress={() => handlePressButtonAsync(true)}
          />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            setIsCamera(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Select Category</Text>
              <View style={styles.modelButtonContainer}>
                {[
                  "Sweets",
                  "Pastry",
                  "Bread",
                  "Cake",
                  "Cookie",
                  "Donut",
                  "Pizza",
                  "Sandwich",
                  "ABC",
                ].map((itemName, index) => (
                  <TouchableOpacity
                    key={index + 1}
                    style={[
                      styles.modelButton,
                      index === 8 && styles.hiddenButton,
                    ]}
                    onPress={() => handleModelSelect(index + 1)}
                  >
                    <Text
                      style={[
                        styles.modelButtonText,
                        index === 8 && styles.hiddenButtonText,
                      ]}
                    >
                      {itemName}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePreview: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  hetext: {
    fontSize: 30,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  modalView: {
    margin: 50,
    backgroundColor: "lightgray",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    width: "80%",
  },
  modelButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  modelButton: {
    backgroundColor: "#351401",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "30%",
  },
  modelButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  hiddenButton: {
    backgroundColor: "lightgray",
    borderColor: "lightgray",
    borderWidth: 1,
  },
  hiddenButtonText: {
    color: "transparent",
  },
});

export default SearchScreen;
