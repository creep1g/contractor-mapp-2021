import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ContactList from '../../components/contactList';
import Toolbar from '../../components/toolbar';
import * as Contact from 'expo-contacts';
import AddModal from '../../components/AddModal';
import * as fileService from '../../services/fileService';

const Contacts = function( {navigation: { navigate }} ) {

	const [ contacts, setContacts ] = useState([]);

	const [filteredContacts, setFilteredContacts] = useState([]);

	const [ isAddModalOpen, setIsAddModalOpen] = useState(false);

	
	
	const loadAllContacts = async () => {
		const contactObjects = await fileService.getAllContacts();
		const contactList = contactObjects.map(contact => {
			return JSON.parse(contact.file);
		});
		return contactList;
	}

    useEffect(() => {
        (async () => {
            const contacts = await loadAllContacts();
            setContacts(contacts);
			setFilteredContacts(contacts);
        })();
    }, []);

  const addContact = async (input) => {
	  const nextId = await fileService.nextId();
	const newContact = {
		id: nextId,
		name: input.name,
		image: input.image,
		number: input.number,
		location: '',
	};
	await fileService.addContact(newContact);
	setContacts([...contacts, newContact]);
	setFilteredContacts([...filteredContacts, newContact]);
	setIsAddModalOpen(false);
  };

  const importContacts = async () => {
	  const {status} = await Contact.requestPermissionsAsync();
	  if (status === 'granted') {
		  const {data} = await Contact.getContactsAsync({
			  fields: [
				  Contact.Fields.Name,
				  Contact.Fields.Image,
				  Contact.Fields.PhoneNumbers,
			  ]
		  });
		  if (data.length > 0) {
			let all = [];
			for (var i = 0; i < data.length; i++) {
				let newId = await fileService.nextId();
				const contact = {
					"id": newId,
					"name": data[i].name,
					"image": '',
					"number": data[i].phoneNumbers[0].number,
					"location": ''
				}
				if (data[i].imageAvailable) {
					contact.image = data[i].image.uri
				}
				await fileService.addContact(contact);
				all.push(contact);
			}
			setContacts([...contacts, ...all])
			setFilteredContacts([...filteredContacts, ...all])
			await fileService.importing();
		  }
	  }
  }

  const test = async () => {
	    //loadAllContacts();
		await importContacts();
		//fileService.cleanDirectory();
		const settings = await fileService.getSettings();
		console.log(settings);
  };

	return(
		<View style={{flex:1}}>
			<Toolbar 
				name="contactList"
				onAdd={() => setIsAddModalOpen(true)}
				test={() => test()}
				filteredDataSource={filteredContacts}
				setFilteredDataSource={setFilteredContacts}
				masterDataSource={contacts}
			/>
			<View style={{flex:1}}>
				<ContactList 
					contacts={filteredContacts}
					onSelect={(user) => navigate('Details', { user: user, 
						contacts: contacts, 
						filteredContacts: filteredContacts, 
						setContacts: setContacts, 
						setFilteredContacts: setFilteredContacts})}
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
