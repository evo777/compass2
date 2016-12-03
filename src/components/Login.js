import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  StatusBar, 
  TouchableHighlight,
} from 'react-native';

import { fullPageView } from '../styles/globalStyles';

const Login = ({ navigator }) => {

  // destructuring the styles for easier readability in returned JSX
  const { 
    bgImage, 
    title, 
    imageContainer, 
    centeredElements, 
    signInButton,
    basicText,
  } = styles;

  return (
    <View style={{...fullPageView, ...centeredElements}}>
      <Image source={require('../assets/images/LoginBG.jpg')} style={bgImage} ></Image>
      <View style={imageContainer}>
        <Image source={require('../assets/images/CompassWordmark.png')} style={title} ></Image>
      </View>
      <TouchableHighlight onPress={() => navigator.push({name: 'Map'})} style={signInButton} underlayColor={'transparent'} >
        <Text style={basicText}>Sign In</Text>
      </TouchableHighlight>
    </View>
  )
};

// stylin'!
const styles = {
  centeredElements: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  title: {
    flex: 1,
    width: Dimensions.get('window').width - 100,
    height: undefined,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: 100,
  },
  signInButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'white',

    justifyContent: 'center',
    alignItems: 'center',

    width: Dimensions.get('window').width - 140,
    width: Dimensions.get('window').width - 100,
    height: 45,
  },
  basicText: {
    color: 'white',
    fontWeight: 'bold',
  }
}


export default Login;