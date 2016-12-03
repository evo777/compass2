import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import ChatListItem from './ChatListItem';
import colors from '../styles/colors';

const ChatList = ({ navigator }) => {

  // destructuring the styles for easier readability in returned JSX
  const { 
    fullPageView, 
    circle, 
    bigLetter, 
    userName,
    logOutButton,
    logOutText,
  } = styles;

  let currentUserName = 'Cameron Baughn';

  return (
    <View style={fullPageView}>
      <View style={circle}>
        <Text style={bigLetter}>{currentUserName[0]}</Text>
      </View>
      <Text style={userName}>{currentUserName}</Text>

      <View style={logOutButton}>
        <Text style={logOutText}>Log Out</Text>
      </View>
    </View>
  )
};

const styles = {
  fullPageView: {
    paddingTop: 50,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,

    alignItems: 'center',
  }, 

  circle: {
    backgroundColor: colors.golden,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 20,
    marginBottom: 15,

    borderRadius: 100,
    width: 75, 
    height: 75,
  },

  bigLetter: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },

  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  logOutButton: {
    width: Dimensions.get('window').width,
    height: 60,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0.5,
    borderColor: colors.extraLightGrey,
  },

  logOutText: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
  }
}

export default ChatList;