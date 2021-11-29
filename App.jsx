import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
	  	<AppContainer />
    </View>
  );

}
