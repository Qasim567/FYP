import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Dimensions, ScrollView } from 'react-native';
function LoginScreen(props) {
    return (
        <LinearGradient style={styles.container} colors={['#4e0329', '#ddb52f']}>
            <ScrollView style={styles.container}>
                <View style={styles.firstView}>
                    <Text style={styles.headingText}>Sign in{'\n'}
                        <Text style={styles.subText}>Please sign in to continue</Text>
                    </Text>
                    <Image
                        style={styles.image}
                        source={require('../assets/donut.png')}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.secondView}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your email'
                        keyboardType='email-address'
                    />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your password'
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.thirdView}>
                    <Pressable style={styles.button} android_ripple={{ color: '#210644' }}
                        onPress={() => props.navigation.navigate('TabHome')}>
                        <Text style={styles.buttontext}>Sign in</Text>
                    </Pressable>
                    <View style={styles.innerView}>
                        <Text style={{ color: 'gray' }}>Don't have an account?</Text>
                        <Pressable android_ripple={{ color: '#210644' }}
                            onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={styles.buttonText}>Create Account</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstView: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.05,
    },
    headingText: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: '5%',
    },
    subText: {
        fontSize: 15,
        color: 'gray',
    },
    image: {
        width: Dimensions.get('screen').width * 0.5,
        height: Dimensions.get('screen').width * 0.5,
        marginLeft: Dimensions.get('screen').width * 0.25,
    },
    secondView: {
        flex: 0.2,
        marginTop: Dimensions.get('screen').height * 0.01,
    },
    inputLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: 9,
    },
    textInput: {
        borderRadius: 8,
        fontSize: 15,
        backgroundColor: 'lightgray',
        marginTop: 3,
        marginHorizontal: '8%',
        paddingVertical: '2%',
        paddingHorizontal: 8,
        elevation: 7,
    },
    thirdView: {
        flex: 0.3,
    },
    button: {
        marginTop: Dimensions.get('window').width * 0.1,
        alignItems: 'center',
        borderRadius: 40,
        backgroundColor: '#5e2c04',
        marginHorizontal: '23%',
        paddingVertical: '2%',
        elevation: 7,
    },
    buttontext: {
        fontSize: 25,
        color: 'white',
    },
    innerView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#5e2c04',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
