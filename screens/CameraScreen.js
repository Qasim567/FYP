import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

function CameraScreen() {
  const [predictionResult, setPredictionResult] = useState(null);

  const handleTakePicture = async (camera) => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      
      // Send image data to Flask server for prediction
      try {
        const response = await axios.post('http://192.168.0.105:5000/predict', {
          image: data.base64,
        });
        setPredictionResult(response.data);
      } catch (error) {
        console.error('Error sending image to server:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />
      <Button title="Take Picture" onPress={handleTakePicture} />
      {/* Display predictionResult here */}
    </View>
  );
}

export default CameraScreen;
