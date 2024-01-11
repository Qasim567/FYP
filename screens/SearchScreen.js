import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';

function SearchScreen(){
  const [result, setResult] = useState(null);

  const handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync('http://192.168.0.101:5000/webcam');
    setResult(result);
  };
  return(
    <View style={style.container}>
      <Button title="Open WebBrowser" onPress={handlePressButtonAsync} />
    </View>
  );
}
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default SearchScreen;