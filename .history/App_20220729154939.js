import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } 
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

