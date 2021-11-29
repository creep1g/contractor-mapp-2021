import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routes = function () {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export defaulst Routes;
