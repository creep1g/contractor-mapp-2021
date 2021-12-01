import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Contacts from '../views/Contacts';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
				<Stack.Screen options={{ headerStatusBarHeight: 22, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
