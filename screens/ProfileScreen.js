import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, ImageBackground, Image } from 'react-native'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

function ProfileScreen({ navigation }) {

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User logged out successfully:');
                navigation.replace('Login')
                setUser(null);
            })
            .catch((error) => {
                console.log('Error', error);
            });
    };
    const handleNavigateToTabHome = () => {
        navigation.replace('TabHome');
    };

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/cookie.jpg')}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View style={styles.imgview}>
                    <Image style={{ width: 200, height: 200 }}
                        source={require('../assets/logout.png')}
                        resizeMode='contain'
                    />
                </View>
                <View style={{ flex: 0.2, marginTop: '10%' }}>
                    <Text style={styles.txt}>Oh no! You're leaving...{'\n'}Are you sure?</Text>
                </View>
                <View style={{ flex: 0.4 }}>
                    <Pressable style={styles.btn1}
                        onPress={handleNavigateToTabHome}>
                        <Text style={styles.txt1}>Naah, Just Kidding</Text>
                    </Pressable>
                    <Pressable style={styles.btn2}
                        onPress={handleLogout}>
                        <Text style={styles.txt2}>Yes, Log Me Out</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    imgview: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30%'
    },
    txt: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    btn1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f2f25',
        marginHorizontal: '10%',
        paddingVertical: 8,
        borderRadius: 30
    },
    txt1: {
        fontSize: 30,
        color: 'white'
    },
    btn2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%',
        marginHorizontal: '10%',
        paddingVertical: 8,
        borderRadius: 30,
        borderColor: '#3f2f25',
        borderWidth: 2,
    },
    txt2: {
        fontSize: 30,
        color: 'white'
    },

})
export default ProfileScreen;