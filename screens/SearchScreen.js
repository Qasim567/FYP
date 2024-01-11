import React from "react";
import {View,Text,StyleSheet} from 'react-native'

function SearchScreen(){
  return(
    <View style={style.container}>
        <Text>Prediction Screen</Text>
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