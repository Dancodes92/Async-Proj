import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Button, Alert } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AddBMI from './app/screens/AddBMI';

const RootStack = createStackNavigator();

const App = () => {

  return (
   <NavigationContainer>
     <RootStack.Navigator>
        <RootStack.Screen name="Welcome" component={WelcomeScreen} />
        <RootStack.Screen name="Target Calories" component={AddBMI} />
     </RootStack.Navigator>
   </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
