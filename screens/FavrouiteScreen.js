import {Text,View,StyleSheet} from 'react-native'
function FavrouiteScreen(){
    return(
        <View style={styles.container}>
            <Text>Favorites Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default FavrouiteScreen;