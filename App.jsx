import React from 'react';
import { View} from 'react-native';
import AppContainer from './src/routes';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<AppContainer />
		</View>
	);

}
