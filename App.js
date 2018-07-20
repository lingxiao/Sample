/**
  @Use   : application top level
  @Author: Xiao Ling
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> this is a sample app to test react-native-google-signin </Text>
      </View>
    );
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
