import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, Image, Pressable, Dimensions, ScrollView} from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
function SignupScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearEmailError = () => {
        setEmailError('');
    };

    const clearPasswordError = () => {
        setPasswordError('');
    };

    const signup = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigation.replace("TabHome");
            })
            .catch((error) => {
                if (email === '') 
                {
                    setEmailError('Email is Required');
                } else if (!/^\S+@\S+\.\S+$/.test(email)) 
                {
                    setEmailError('Email is Invalid');
                }
                if (password === '') 
                {
                    setPasswordError('Password is Required');
                } else if (password.length !== 6) 
                {
                    setPasswordError('Password must be exactly 6 characters');
                }
            });
    }

    return (
        <LinearGradient style={styles.container} colors={['#4e0329', '#ddb52f']}>
            <ScrollView style={styles.container}>
                <View style={styles.firstView}>
                    <Text style={styles.headingText}>Sign up{'\n'}
                        <Text style={styles.subText}>Please sign up to continue</Text>
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
                        onChangeText={(text) => {
                            setEmail(text);
                            clearEmailError();
                        }}
                    />
                    <Text style={{ color: 'red', paddingHorizontal: 31, fontSize: 13 }}>{emailError}</Text>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            setPassword(text);
                            clearPasswordError();
                        }}
                    />
                    <Text style={{ color: 'red', paddingHorizontal: 31, fontSize: 13 }}>{passwordError}</Text>
                </View>
                <View style={styles.thirdView}>
                    <Pressable style={styles.button} android_ripple={{ color: '#210644' }}
                        onPress={() => signup()}>
                        <Text style={styles.buttontext}>Sign up</Text>
                    </Pressable>
                    <View style={styles.innerView}>
                        <Text style={{ color: 'gray' }}>Already have an account?</Text>
                        <Pressable android_ripple={{ color: '#210644' }}
                            onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    )
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
export default SignupScreen;