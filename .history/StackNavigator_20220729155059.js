import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator

const StackNavigator = () => {
  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})