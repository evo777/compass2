import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import { fullPageView } from '../styles/globalStyles';
import colors from '../styles/colors';

const ChatListItem = ({ navigator, userName, lastMessage }) => {

  // destructuring the styles for easier readability in returned JSX
  const { 
    container,
    name,
    chatText,
    circle,
    bigLetter,
  } = styles;

  return (
    <TouchableHighlight onPress={() => navigator.push({name: 'Chat'})} underlayColor={colors.extraLightGrey} >
      <View style={container}>
        <View style={circle}>
          <Text style={bigLetter}>{userName[0]}</Text>
        </View>
        <View>
          <Text style={name}>{userName}</Text>
          <Text style={chatText}>{lastMessage}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
};

const styles = {
  container: {
    width: Dimensions.get('window').width -20,
    height: 80,
    backgroundColor: 'white',

    flexDirection: 'row',
    alignItems: 'center',

    borderBottomWidth: 0.5,
    borderBottomColor: colors.extraLightGrey,

  },

  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },

  chatText: {
    color: colors.lightGrey,
  },

  circle: {
    backgroundColor: colors.golden,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 20,

    borderRadius: 100,
    width: 50, 
    height: 50,
  },

  bigLetter: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
}

export default ChatListItem;