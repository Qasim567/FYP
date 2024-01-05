import React, { useState } from 'react';
import {Text,View,StyleSheet, Pressable} from 'react-native'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

function ProfileScreen({navigation}){
    
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

    return(
        <View style={styles.container}>
            <Pressable onPress={handleLogout}>
                <Text>Log out</Text>
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

})
export default ProfileScreen;