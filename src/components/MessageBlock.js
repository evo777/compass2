import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import colors from '../styles/colors';

const MessageBlock = ({ user, message }) => {

  let currentUser = 'Cameron';

  // destructuring the styles for easier readability in returned JSX
  const { 
    container,
    blackText,
    whiteText,
    circle,
    bigLetter,
    colorBlock,
    greyColorBlock,
    blueColorBlock,
    rightBlock,
    leftBlock,
  } = styles;

  // Determine the styles based on the user
  let block;
  let chatText;
  let messageContainer;

  if (user === currentUser) {
    block = {...colorBlock, ...blueColorBlock};
    chatText = whiteText;
    messageContainer = {...container, ...rightBlock}
  } else {
    block = {...colorBlock, ...greyColorBlock};
    chatText = blackText;
    messageContainer = {...container, ...leftBlock}
  }

  return (
      <View style={messageContainer}>
        <View style={block}>
          <Text style={chatText}>{message}</Text>
        </View>
      </View>
  )
};

// -------------------------------- Stylin'! --------------------------------

const styles = {
  // INVISIBLE CONTAINER FOR THE MESSAGE BLOCK
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',

    marginTop: 20,

    flexDirection: 'row',
    alignItems: 'center',
  },

  rightBlock: {
    justifyContent: 'flex-end',
  },

  leftBlock: {
    justifyContent: 'flex-start',
  },

  // COLOR BLOCKS BEHIND TEXT
  colorBlock: {
    maxWidth: Dimensions.get('window').width - 100,

    flexDirection: 'row',
    alignItems: 'center',

    padding: 10,
    marginLeft: 20,
    marginRight: 20,

    borderRadius: 3,
  },

  greyColorBlock: {
    backgroundColor: colors.extraLightGrey,
  },

  blueColorBlock: {
    backgroundColor: colors.lightBlue,
  },


  // TEXT
  blackText: {
    color: 'black',
  },

  whiteText: {
    color: 'white',
  },


  // Not using circle currently, but holding onto it just in case
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

export default MessageBlock;