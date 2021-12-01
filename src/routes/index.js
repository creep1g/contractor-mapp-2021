import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Contacts from '../views/Contacts';
import Detials from '../views/Details';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Contacts" component={Contacts} />
				<Stack.Screen options={{ headerStatusBarHeight: 30, headerStyle: styles.header, headerTintColor:'#fff'}}  name="Details" component={Detials} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
