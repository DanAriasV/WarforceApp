import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/screens/Home';
import Planets from './src/components/screens/Planets';

const Stack = createStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Planets" component={Planets}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}