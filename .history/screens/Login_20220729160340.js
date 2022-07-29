import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert  } from 'react-native'
import React, { useRef, useState}  from 'react'
import { useNavigation } from '@react-navigation/native'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'

const Login = () => {

    const navigation = useNavigation();

    
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login