import React, { useState } from "react";
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

function SearchScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  const handlePressButtonAsync = async (isCamera) => {
    try {
      let result;
      if (isCamera) {
        result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
      } else {
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: false,
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
          console.log("Sending Axios requests...");
          let responses = await Promise.all([
            axios.post("http://192.168.0.105:5000/predict_model1", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model2", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model3", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model4", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model5", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model6", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model7", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model8", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
            axios.post("http://192.168.0.105:5000/predict_model9", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }),
          ]);

          let highestConfidencePrediction = null;

          responses.forEach((response) => {
            for (const [className, prediction] of Object.entries(
              response.data
            )) {
              if (
                !highestConfidencePrediction ||
                prediction.confidence > highestConfidencePrediction.confidence
              ) {
                highestConfidencePrediction = {
                  className,
                  count: prediction.count,
                  confidence: prediction.confidence,
                };
              }
            }
          });

          setPredictionResult(highestConfidencePrediction);
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
            <Text style={styles.resultText}>
              Item: {predictionResult.className}
            </Text>
            <Text
              style={styles.resultText}
            >{`Confidence: ${predictionResult.confidence}`}</Text>
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
});

export default SearchScreen;
