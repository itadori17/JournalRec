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

const styles = StyleSheet.create({
    container:{
        flex:1,
    
        backgroundColor:'',
      
    },
    textInput:{
    
       paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
       borderBottomColor:'#fff',
        borderBottomWidth:2,
        marginBottom:20,
       textAlign:'center',
        color:'black'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10,
     },
     sendCode:{
        padding:20,
        backgroundColor:'#9b59b6',
        borderRadius:10,
     },
     buttonText:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold'
     },
    
    otpText:{
    
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
    }
    
})