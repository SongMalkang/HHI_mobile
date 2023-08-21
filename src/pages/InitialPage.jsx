/* eslint-disable react/react-in-jsx-scope */
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/logo.png';

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://10.8.0.34:5173/'}}
      />
    );
  }
}

const InitialPage = ({key, name, title}) => {
  return (
    <MyWeb />
    );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: '100%',
  },
  logoContainer: {
    position: 'relative',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: '25%',
  },
  routeContainer: {
    position: 'relative',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '90%',
    height: '75%',
  },

  logoImageBox: {
    position: 'relative',
    width: '90%',
    height: '50%',
  },
  logoTextBox: {
    position: 'relative',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default InitialPage;
