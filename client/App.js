import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import axios from 'axios'


export default function App() {
  /*const client = axios.create({
    baseURL: 'http://localhost:3000',
    json: true
  })

  data = () => {
    return {
      response: 'No data yet...'
    }
  }

  const sendRequest = () => {
    client({
      method: 'get',
      url: '/'
    }).then((res) => {
      this.response = res.data.message
    }).catch((error) => {
      this.response = error
    })
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      onPress= {sendRequest}
      title= "Send Request"
      />
    </View>
  );*/

  function onSignInButtonClick() {
    // Open the Auth flow in a popup. -- Not sure what the mobile equivalent is supposed to be?
    window.open('/redirect', 'firebaseAuth', 'height=315,width=400');
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
      onPress= {onSignInButtonClick}
      title= "Send Request"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});