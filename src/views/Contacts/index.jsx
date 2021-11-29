import React, {useState, useEffect} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import ContactList from '../../components/contactList';
import contactService from '../../services/contactService';

const Contacts = function() {

	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		(async () => {
			const contacts = await contactService.getContacts();
			setContacts(contacts)
		})();
	}, []);

	console.log({contacts})
	return(
		<View style={{flex:1}}>
			<ContactList />
		</View>)
};

export default Contacts;

