import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import { fullPageView } from '../styles/globalStyles';
import ChatListItem from './ChatListItem';

const ChatList = ({ navigator }) => {

  // destructuring the styles for easier readability in returned JSX
  const { container } = styles;

  return (
    <View style={{...fullPageView, ...container}}>
     <ChatListItem userName={'Anna-Sophie'} lastMessage={'Hey, what\'s up?'} navigator={navigator} />
     <ChatListItem userName={'Mitch'} lastMessage={':partyparrot:'} navigator={navigator} />
     <ChatListItem userName={'Evo'} lastMessage={'bbbb'} navigator={navigator} />
    </View>
  )
};

const styles = {
  container: {
    backgroundColor: 'white',

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    alignItems: 'flex-end',

    position: 'absolute',
    top: 0,
    left: 0,

    paddingTop: 50,
  }
}

export default ChatList;