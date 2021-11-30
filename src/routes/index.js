import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../views/Contacts';

const Stack = createStackNavigator();

const Routes = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contacts">
				<Stack.Screen options={{ headerStatusBarHeight: 22, headerStyle: { backgroundColor: '#393E42' }, headerTintColor:'#fff'}}  name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
