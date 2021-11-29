import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
	return (
    <View style={styles.container}>
	  <AppContainer />
    <StatusBar style="auto" />
    </View>
  );
}
