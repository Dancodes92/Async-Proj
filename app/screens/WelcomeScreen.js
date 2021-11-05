import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image, Button } from 'react-native'

function WelcomeScreen({ navigation }) {  // navigation is a prop that is passed in from the parent component
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/Cal-Track-logo-white.png')} />
        <Text style={styles.text}>The best way to stay on track</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Target Calories')}>Add Meal</Text>
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#E74C3C',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center',

  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#3498DB',
  },
})

export default WelcomeScreen;
