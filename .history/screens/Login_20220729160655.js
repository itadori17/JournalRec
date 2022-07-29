import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert  } from 'react-native'
import React, { useRef, useState}  from 'react'
import { useNavigation } from '@react-navigation/native'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '../config';

const Login = () => {

    const navigation = useNavigation();

    
  return (
    <View style={styles.container}>
            
            <Text style={styles.otpText}>
                Login using OTP
            </Text>
            <TextInput
                placeholder='Phone Number with your code'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
                />
                <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                    <Text style={styles.buttonText}>
                        Send Verification
                    </Text>
                </TouchableOpacity>
                <TextInput
                placeholder='Confirm code'
                onChangeText={setCode}
                keyboardType='number-pad'
                style={styles.textInput}
                />
                       <TouchableOpacity style={styles.sendCode}
                       onPress = {confirmCode} >
                    <Text style={styles.buttonText}>
                        Confirm Verification
                    </Text>
                </TouchableOpacity>
        </View>
    )
 
  }
  


export default Login