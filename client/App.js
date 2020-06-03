import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import InstagramLogin from 'react-native-instagram-login'
import store from 'react-native-simple-store'
import axios from 'axios'


export default class App extends Component {
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
  
  constructor(props) {
    super(props)
    this.state = {
      token: ''
    }
  }

  setIgToken = async (data) => {
    await store.save('igToken', data.access_token)
    await store.save('igUserId', data.user_id)
    this.setState({ igToken: data.access_token, igUserId: data.user_id})
  }
  render () {
  return (
    // <WebView source={{
    //   uri: 'https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code'
    // }} 
    // style={{ marginTop: 40 }}/>
  //   <View style={styles.container}>
     
  //   style={{ marginTop: 20 }}/> */}
  //   {/* <Text>Open up App.js to start working on your app!</Text>
  //     <Button 
  //     onPress= {onSignInButtonClick}
  //     title= "Send Request"
  //     />
  //   </View>
  <View>
  <TouchableOpacity onPress={()=> this.instagramLogin.show()}>
      <Text style={{color: 'red'}}>Login</Text>
      <Text style={{color: 'red'}}>this.state.token</Text>
  </TouchableOpacity>
  <InstagramLogin
      ref={ref => (this.instagramLogin = ref)}
      appId='550046499039084'
      appSecret='bffcbe0912d7d4e3e53c2be5825f678a'
      redirectUrl='https://www.google.com'
      scopes={['user_profile', 'user_media']}
      onLoginSuccess={ this.setIgToken }
      onLoginFailure={(data) => console.log(data)}
  />
</View>
   )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});