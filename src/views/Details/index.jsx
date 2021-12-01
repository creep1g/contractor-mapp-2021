import React, { useState, useEffect } from 'react';
import {Linking, LogBox, View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import styles from './styles';
import Buttons from '../../components/ButtonArray';
import EditModal from '../../components/EditModal';
import * as FileService from '../../services/fileService';
import * as encoding from 'text-encoding';

const Details = function( {route, navigation: { goBack}}){

  // State persistance is not important so we ignore these warnings.
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
   ]);
  
  const { user, setContacts, filteredContacts, setFilteredContacts } = route.params;
  
  const [ currUser, setCurrUser ] = useState(user);

  const [ gotUser, setGotUser ] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	
  // Update currUser
  const updateContact = async ( input ) => {
		const encode = new encoding.TextEncoder();
    const updatedContact = {
      id: currUser.id,
			fileName: encode.encode(input.name),
			name: input.name,
			image: input.image,
			number: input.number,
			location: '',
	  };
    await FileService.removeContact(currUser.location);
    setCurrUser(updatedContact);
    setIsEditModalOpen(false);
	await FileService.addContact(updatedContact);
    newList = filteredContacts.filter((contact) => contact.id !== updatedContact.id)
    setFilteredContacts([...newList, updatedContact]);
    setContacts([...newList, updatedContact]);
  };

  // Asyncronousy get access to user file
  useEffect(() => {
    async function get() {
	  const contact = await FileService.loadForUpdate(user.location)
	  setGotUser(contact)
	  }
	  get();
  }, []);

 
  // Opens phone app to call 
  const callNumber = ( phone ) => {
		let phoneNumber = phone;
		if (Platform.OS !== 'android'){
			phoneNumber = `tel:${phone}`;
		}
		else{
			phoneNumber = `tel:${phone}`;
			}
		Linking.canOpenURL(phoneNumber).then(() =>{
				return Linking.openURL(phoneNumber);
		})
			.catch((err) => console.log(err));
	}

  // Same as call but opens text messaging application
  const textNumber = ( phone ) => {
	let phoneNumber = phone;
	if (Platform.OS !== 'android'){
		phoneNumber = `sms:${phone}`;
	}
	else{
		phoneNumber = `sms:${phone}`;
	}
	Linking.canOpenURL(phoneNumber).then(() =>{
			return Linking.openURL(phoneNumber);
	})
		.catch((err) => console.log(err));
}
	const deleteContact = async () => {
		await FileService.removeContact(user.location);
		const contactObjects = await FileService.getAllContacts();
		const contactList = contactObjects.map(contact => {
			return JSON.parse(contact.file);
		});
		setContacts(contactList);
		setFilteredContacts(contactList);
		goBack();
	}

  return(	
	<View style={{flex: 1}}>
		{/* Top heading with contact name and image */}
		<View style={styles.heading}>
			{
			  currUser.image !== ""
			?
			  <Image 
			  style={	styles.image	}
			  source={{ uri: currUser.image }}
			  resizeMode={ 'cover' } />
			:
			  <View style={ [ styles.image, { backgroundColor: "#393E42" }] }>
			  	<Text style={{fontSize: 80, 
				              textAlign:'center', 
				  	    	  color:'white'}}>
				  	{ currUser.name[0] }
				  </Text>
				</View>
			}
			<Text style={styles.name}>{ currUser.name }</Text>
		</View>

	{/* Buttons ! */}
	<Buttons 
		makeCall={() => callNumber(currUser.number)}
		sendText={() => textNumber(currUser.number)}
		editContact={() => setIsEditModalOpen(true)}
		deleteContact={() => deleteContact()}
	/>
		

		<TouchableHighlight 
			style={ styles.card }
			activeOpacity={ 0.6 }
			underlayColor={ 'darkgray' }
			onPress={() => callNumber(currUser.number)}
		>
			<View style={ { flex: 1 } }>
				<Text style={ styles.phone }>Phone</Text>
				<Text style={ styles.number }>{ currUser.number }</Text>
			</View>
		</TouchableHighlight>

      <EditModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
		user={gotUser}
	    updateContact={(input) => updateContact(input)}
      />
	</View>
	)

};


export default Details;
