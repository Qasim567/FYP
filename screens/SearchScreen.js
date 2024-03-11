import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

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

      if (!result.cancelled) {
        const selectedAsset = result.assets[0];
        setImageUri(selectedAsset.uri);
        const imageType = selectedAsset.mediaType;

        let formData = new FormData();
        formData.append('image', {
          uri: selectedAsset.uri,
          type: imageType === 'video' ? 'video/mp4' : 'image/jpeg',
          name: 'photo.jpg',
        });

        try {
          console.log('Sending Axios request...');
          let response = await axios.post('http://192.168.1.4:5000/predict', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('Axios Response:', response.data);
          setPredictionResult(response.data);
        } catch (axiosError) {
          console.error('Axios Error:', axiosError);
          setError('Error during image prediction. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error during image selection:', error);
      setError('Error during image selection. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}
      {predictionResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Prediction Result:</Text>
          {Object.entries(predictionResult).map(([className, { count, confidence }], index) => (
            <View key={index}>
              <Text style={styles.resultText}>Class Name: {className}</Text>
              <Text style={styles.resultText}>{`Count: ${count}`}</Text>
              <Text style={styles.resultText}>{`Confidence: ${confidence}`}</Text>
            </View>
          ))}
        </View>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <Button title="Select Image" onPress={() => handlePressButtonAsync(false)} />
        <Button title="Capture Image" onPress={() => handlePressButtonAsync(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePreview: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
});

export default SearchScreen;
