import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import ContactList from '../../components/contactList';

const Contacts = function() {
	return(
		<View style={{flex:1}}>
			<ContactList />
		</View>)
};

export default Contacts;

