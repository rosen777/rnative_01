import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component {
  render() {
    console.log('Hello')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}


