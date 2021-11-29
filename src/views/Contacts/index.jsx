import React, { useState } from 'react';
import { View } from 'react-native';
import ContactList from '../../components/contactList';
import data from '../../data/data.json';
import Toolbar from '../../components/toolbar';

const Contacts = function( {navigation: { navigate }} ) {

	const [ contacts, setContacts ] = useState(data.contacts);

	const [ selectedContacts, setSelectedContacts ] = useState([]);

	const onContactLongPress = (id) => {
		console.log({ id });
    if (selectedContacts.indexOf(id) !== -1) {
      setSelectedContacts(selectedContacts.filter((contact) => contact !== id));
    }
		else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

	return(
		<View style={{flex:1}}>
			<Toolbar />
			<View style={{flex:1}}>
				<ContactList 
					onLongPress={(id) => onContactLongPress(id)}
					selectedContacts={selectedContacts}
					contacts={contacts}
				/>
			</View>
		</View>
	)

};

export default Contacts;

