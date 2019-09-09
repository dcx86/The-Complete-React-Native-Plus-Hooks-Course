import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import { apiKey, authDomain, databaseURL, storageBucket, messagingSenderId } from '../env'

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
        <Text>An app</Text>
      </View>
    )
  }
}

export default App
