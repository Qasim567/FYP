import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, Image, 
    Pressable, Dimensions, ScrollView, Modal, ActivityIndicator, ImageBackground} from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

function LoginScreen({ navigation }) {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [forgetPasswordModalVisible, setForgetPasswordModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    const clearEmailError = () => {
        setEmailError('');
    };

    const clearPasswordError = () => {
        setPasswordError('');
    };

    const handleForgetPassword = () => {

        setEmail('');
        setForgetPasswordModalVisible(true);
    };

    const closeForgetPasswordModal = () => {
        setForgetPasswordModalVisible(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          console.log("USER IS STILL LOGGED IN: ", user);
          if (user) {
            setLoading(false);
            navigation.replace("TabHome");
          } else {
            setLoading(false);
          }
        });
    
        return () => unsubscribe();
      }, [user, navigation]);

    const login = () => {
        signInWithEmailAndPassword(auth,email, password)
        .then((userCredential) => {
            setUser(userCredential);
            })
            .catch((error) => {
                if (email === '') {
                    setEmailError('Email is Required');
                } else if (!/^\S+@\S+\.\S+$/.test(email)) {
                    setEmailError('Email is Invalid');
                }
                else if (password === '') {
                    setPasswordError('Password is Required');
                }
                else if (password.length !== 6) {
                    setPasswordError('Password must be exactly 6 characters');
                }
                else {
                    setPasswordError('Incorrect Email or Password');
                }
            });
    };

    const onSubmit = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password Reset Email has been sent Successfully')
            })
            .catch((error) => {
                if (email === '') {
                    alert('Email is Required');
                }
                else if (!/^\S+@\S+\.\S+$/.test(email)) {
                    alert('Email is Invalid');
                }
                else {
                    alert('Email does not exist');
                }
            });
    }

    if (loading) {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#5e2c04" />
          </View>
        );
      }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/cookie.jpg')}
            resizeMode="cover"
        >
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
                    <Pressable onPress={handleForgetPassword}>
                        <Text style={{ color: '#5e2c04', fontWeight: 'bold', marginTop: '1.5%', textAlign: 'right', marginRight: '5%' }}>Forget Password</Text>
                    </Pressable>
                    <Text style={{ color: 'red', paddingHorizontal: 31, fontSize: 13 }}>{passwordError}</Text>
                </View>
                <View style={styles.thirdView}>
                    <Pressable style={styles.button} android_ripple={{ color: '#210644' }}
                        onPress={() => login()}>
                        <Text style={styles.buttontext}>Sign in</Text>
                    </Pressable>
                    <View style={styles.innerView}>
                        <Text style={{ color: 'gray' }}>Don't have an account?</Text>
                        <Pressable android_ripple={{ color: '#210644' }}
                            onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.buttonText}>Create Account</Text>
                        </Pressable>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={forgetPasswordModalVisible}
                    onRequestClose={closeForgetPasswordModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalHeading}>Forget Password</Text>
                            <Text style={styles.modalText}>Enter your email</Text>
                            <TextInput
                                style={styles.modalTextInput}
                                placeholder="Email"
                                keyboardType="email-address"
                                onChangeText={(text) => setEmail(text)}
                            />
                            <Pressable onPress={onSubmit}
                                style={{ alignItems: 'center', backgroundColor: '#5e2c04', marginHorizontal: '7%', marginTop: '2%', borderRadius: 7 }}>
                                <Text style={{ color: 'white' }}>Send email</Text>
                            </Pressable>
                            <Pressable onPress={closeForgetPasswordModal}>
                                <Text style={styles.modalCloseText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
      },
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    modalHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    modalTextInput: {
        borderRadius: 8,
        fontSize: 15,
        backgroundColor: 'lightgray',
        marginTop: 3,
        paddingHorizontal: 8,
    },
    modalCloseText: {
        color: '#5e2c04',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    }
});

export default LoginScreen;
