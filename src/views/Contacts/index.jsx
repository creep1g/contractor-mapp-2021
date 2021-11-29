import React, { useState } from 'react';
import { View } from 'react-native';
import ContactList from '../../components/contactList';
import data from '../../data/data.json';

const Contacts = function( {navigation: { navigate }} ) {
	const [ contacts, setContacts ] = useState(data.contacts);

	const [ selectedContacts, setSelectedContacts ] = useState([]);

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

