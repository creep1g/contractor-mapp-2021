import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ContactList from '../../components/contactList';
import Toolbar from '../../components/toolbar';
import * as Contact from 'expo-contacts';
import AddModal from '../../components/AddModal';
import ImportModal from '../../components/ImportModal';
import * as fileService from '../../services/fileService';
import * as encoding from 'text-encoding';

const Contacts = function( {navigation: { navigate }} ) {

	const [ contacts, setContacts ] = useState([]);

	const [filteredContacts, setFilteredContacts] = useState([]);

	const [ isAddModalOpen, setIsAddModalOpen] = useState(false);

	const [ isImportModalOpen, setIsImportModalOpen] = useState(false);

	const [ wantsPrompt, setWantsPrompt ] = useState(true)

	const loadAllContacts = async () => {
		const contactObjects = await fileService.getAllContacts();
		const contactList = contactObjects.map(contact => {
			return JSON.parse(contact.file);
		});
		return contactList;
	}

    useEffect(() => {
        (async () => {
			//test();
            const contacts = await loadAllContacts();
			const prompt = await fileService.promptForImport();
			setWantsPrompt(prompt);
            setContacts(contacts);
			setFilteredContacts(contacts);
			const imported = await fileService.hasImported();
			if (!imported) {
				setIsImportModalOpen(true);
			}
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
	 const encode = new encoding.TextEncoder()
	 const {status} = await Contact.requestPermissionsAsync();

	 if (status === 'granted') {
	  const {data} = await Contact.getContactsAsync({
			  fields: [
				  Contact.Fields.Name,
				  Contact.Fields.Image,
				  Contact.Fields.PhoneNumbers,
			  ]
		  } );
		  if (data.length > 0) {
			let all = [];
			for (var i = 0; i < data.length; i++) {
				let newId = await fileService.nextId();
				const contact = {
					"id": newId,
					"fileName": encode.encode(data[i].name),
					"name": data[i].name,
					"image": '',
					"number": data[i].phoneNumbers[0].number,
					"location": ''
				}
				if (data[i].name){
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
			setIsImportModalOpen(false);
		  }
	  }
  }

  const doNotAskAgain = async ()  => {
	await fileService.setPrompt();
	setWantsPrompt(false);
	setIsImportModalOpen(false);
	};

  const test = async () => {
	    //loadAllContacts();
		//await importContacts();
		await fileService.cleanDirectory();
		//const settings = await fileService.getSettings();
		//console.log(settings);
		const contacts = await loadAllContacts();
            setContacts(contacts);
			setFilteredContacts(contacts);
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
			{

			wantsPrompt
			?
			
			<ImportModal
				isOpen={isImportModalOpen}
				closeModal={() => setIsImportModalOpen(false)}
				importing={() => importContacts()}
				notAgain={() => doNotAskAgain()}
			/>
			:
			<></>
			}
		</View>
	)

};

export default Contacts;
