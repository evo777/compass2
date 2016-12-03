import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
  TextInput,
} from 'react-native';

import colors from '../styles/colors';

const MessageInput = ({ navigator, viewLabel }) => {

  // destructuring the styles for easier readability inside of returned JSX
  const { 
    bottomBar,
    send,
    input,
  } = styles;


  return (
    <View style={bottomBar}>
      <View>
        <TextInput 
          style={input}
          placeholder="Write a message"
        ></TextInput>
      </View>
      <Text style={send}>SEND</Text>
    </View>
  )
};

// stylin'!
const styles = {
  bottomBar: {
    backgroundColor: 'white',

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: Dimensions.get('window').width,
    height: 50,

    position: 'absolute',
    top: Dimensions.get('window').height - 50,
    right: 0,
    zIndex: 1,

    borderTopWidth: 0.5,
    borderTopColor: colors.extraLightGrey,
  },

  send: {
    color: colors.lightBlue,
  },

  input: {
    height: 40,
    width: Dimensions.get('window').width - 100,

    backgroundColor: 'white',

    fontSize: 15,
  }
}


export default MessageInput;