import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Journal from './screens/Journal';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: t }}>
        <Stack.Group>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Journal' component={Journal} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})