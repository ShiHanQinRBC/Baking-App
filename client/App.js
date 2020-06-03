import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
      show: false
    }
  }

  setIgToken = async (data) => {
    await store.save('igToken', data.access_token)
    await store.save('igUserId', data.user_id)
    this.setState({ igToken: data.access_token, igUserId: data.user_id})
  }
  
  render () {
    onSignInButtonClick = () => {
      console.log('Magic!!!')
    }

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://www.google.com/' }} />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Button style={{marginTop:'50px'}} onPress= {onSignInButtonClick} title= "Send Request"/> */}
    </View>
  );
}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop : 50
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});