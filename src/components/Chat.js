import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import MessageBlock from './MessageBlock';
import MessageInput from './MessageInput';

const ChatList = ({ navigator }) => {

  // destructuring the styles for easier readability in returned JSX
  const { container } = styles;

  return (
    <View style={container}>
      {
        dummyChats.map(chat => {
          return <MessageBlock user={chat.user} message={chat.message} key={chat.id} />
        })
      }
      <MessageInput />
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


const dummyChats = [
  {user:'Anna-Sophie', message: 'Hey! What\'s up? Do you want to meet up?', id: 1},
  {user:'Cameron', message: 'Totally! Where are you at? I\'m at home right now, but we could meet up at Starbucks or something.', id: 2},
  {user:'Anna-Sophie', message: 'Yeah, that sounds great!', id: 3},
  {user:'Anna-Sophie', message: 'Do you want to meet at 3?', id: 4},
  {user:'Cameron', message: 'Perfect! I\'ll see you there!', id: 5},
]

export default ChatList;



