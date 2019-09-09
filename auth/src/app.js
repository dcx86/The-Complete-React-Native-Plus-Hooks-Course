import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import { apiKey, authDomain, databaseURL, storageBucket, messagingSenderId } from '../env'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey,
      authDomain,
      databaseURL,
      storageBucket,
      messagingSenderId
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App
