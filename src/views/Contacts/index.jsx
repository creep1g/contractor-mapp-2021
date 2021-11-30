import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ContactList from '../../components/contactList';
import data from '../../data/data.json';
import Toolbar from '../../components/toolbar';
import * as Contact from 'expo-contacts';
import AddModal from '../../components/AddModal';
import { addImage } from '../../services/fileService';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService';

const Contacts = function( {navigation: { navigate }} ) {

	const [ contacts, setContacts ] = useState(data.contacts);

	const [filteredContacts, setFilteredContacts] = useState(data.contacts);

	const [ selectedContacts, setSelectedContacts ] = useState([]);

	const [ isAddModalOpen, setIsAddModalOpen] = useState(false);
	
	useEffect(() => {
		(async () => {
		  const { status } = await Contact.requestPermissionsAsync();
		  if (status === 'granted') {
			const { data } = await Contact.getContactsAsync({
			  fields: [
				Contact.Fields.Name,
				Contact.Fields.Image,
				Contact.Fields.PhoneNumbers
			  ]
			});
			if (data.length > 0) {
				let currentHighId = contacts.reduce(function(prev, current){ 
							if (current.id > prev.id){
								return current.id;
							}
							else {
								return prev;
							}
						});

				let all = [];
				for (var i = 0; i < data.length; i++) {
					let newId = currentHighId + 1 + all.length;
					const contact = {
						// Needs to be fixed so id's don't get mixed up! 
						"id": newId,
						"name": data[i].name,
						"image": '',
						"number": data[i].phoneNumbers[0].number,
						"location": ''
					}
					if (data[i].imageAvailable) {
						contact.image = data[i].image.uri
					}
					all.push(contact);
				}
				setContacts([...contacts, ...all])
				setFilteredContacts([...filteredContacts, ...all])
			}
		  }
		})();
	  }, []);

	
	const onContactLongPress = (id) => {
    if (selectedContacts.indexOf(id) !== -1) {
      setSelectedContacts(selectedContacts.filter((contact) => contact !== id));
    }
		else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const addContact = async (input) => {
	const newContact = {
		id: contacts.length + 1,
		name: input.name,
		image: input.image,
		number: input.number,
		location: '',
	};
	setContacts([...contacts, newContact]);
	newContact.location = await fileService.addContact(newContact);
	//console.log(newContact);
	setIsAddModalOpen(false);
	const bla = await fileService.loadContact(newContact.location);
	// console.log(JSON.parse(bla));
  };

  const test = () => {
	const ppl = fileService.getAllContacts();
	// console.log(ppl);
  };

	return(
		<View style={{flex:1}}>
			<Toolbar 
				onAdd={() => setIsAddModalOpen(true)}
				onModify={() => test()}
				filteredDataSource={filteredContacts}
				setFilteredDataSource={setFilteredContacts}
				masterDataSource={contacts}
			/>
			<View style={{flex:1}}>
				<ContactList 
					onLongPress={(id) => onContactLongPress(id)}
					selectedContacts={selectedContacts}
					contacts={filteredContacts}
				/>
			</View>
			<AddModal
				isOpen={isAddModalOpen}
				closeModal={() => setIsAddModalOpen(false)}
				addContact={(input) => addContact(input)}
				selectFromCameraRoll={() => selectFromCameraRoll()}
			/>
		</View>
	)

};

export default Contacts;
