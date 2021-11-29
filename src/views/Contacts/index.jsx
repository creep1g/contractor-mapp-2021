import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ContactList from '../../components/contactList';
import data from '../../data/data.json';
import contactService from '../../services/contactService';
import * as Contact from 'expo-contacts';

const Contacts = function( {navigation: { navigate }} ) {
	const [ contacts, setContacts ] = useState(data.contacts);

	const [ selectedContacts, setSelectedContacts ] = useState([]);

	useEffect(() => {
		(async () => {
		  const { status } = await Contact.requestPermissionsAsync();
		  if (status === 'granted') {
			const { data } = await Contact.getContactsAsync({
			  fields: [
				Contact.Fields.Name,
				Contact.Fields.Image,
				Contact.Fields.PhoneNumbers],
			});
	
			if (data.length > 0) {
				for (var i = 0; i < data.length; i++) {
					//console.log(data);
					//const phoneNumber = data.phoneNumbers.number;
					const contact = {
						"id": contacts.length + 1,
						"name": data[i].name,
						"image": '',
						//"number": data[i].phoneNumbers[0].number,
					}
					if (data[i].imageAvailable) {
						contact.image = data[i].image.uri
					}
					console.log(contact);
					setContacts([...contacts, contact])
				}
				console.log(contacts);
			}
		  }
		})();
	  }, []);

	const onContactLongPress = (id) => {
    if (selectedContacts.indexOf(id) !== -1) {
      setSelectedContacts(selectedContacts.filter((contact) => contact !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };
	return(
		<View style={{flex:1}}>
			<ContactList 
				onLongPress={(id) => onContactLongPress(id)}
				selectedContacts={selectedContacts}
				contacts={contacts}
			/>
		</View>)
};

export default Contacts;

