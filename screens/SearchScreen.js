import {Text,View,StyleSheet} from 'react-native'
function SearchScreen() {
  return (
    <View style={styles.container}>
    <Text>Prediction Screen</Text>
</View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SearchScreen;