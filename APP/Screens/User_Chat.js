import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
const User_Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const dummyData = [
    { text: "Hello there!", isSender: false, timestamp: "10:00 AM" },
    { text: "Hi! How can I help you?", isSender: true, timestamp: "10:05 AM" },
    { text: "Can you provide more information about the product?", isSender: false, timestamp: "10:10 AM" },
    { text: "Sure! Our product is designed to...", isSender: true, timestamp: "10:15 AM" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}><Text style={styles.headerText}>Today</Text></View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => (
          <View style={item.isSender ? styles.senderMessage : styles.receiverMessage}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messageList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.Attachicon}>
            <Icon2 name='attach-file' size={20} color='grey' />
          </TouchableOpacity>
        <View style={styles.iconContainer}>
          
          <TouchableOpacity style={styles.sendButton}>
            <Icon name='mic' size={20} color='white'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    
  },
  headerContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },
  headerText:{
    backgroundColor:"#F7F7F9",
    padding:4,
    borderRadius:10,
    fontFamily:'Poppins-Regular'
  },
  messageList: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#E5F4FF',
    borderRadius: 14,
    padding: 8,
    marginVertical: 5,
    maxWidth: '70%',
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F7F7F9',
    borderRadius: 14,
    padding: 8,
    marginVertical: 5,
    maxWidth: '70%',
  },
  messageText: {
    color: 'black',
    fontSize: 16,
  },
  timestamp: {
    color: 'gray',
    fontSize: 12,
    marginTop: 2,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
   
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#FF6421',
    borderRadius: 60,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginLeft: 5,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
 
  Attachicon: {
    right: 32
},
});

export default User_Chat;
