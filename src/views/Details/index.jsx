import React, { useState } from 'react';
import {Linking, Alert, View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import styles from './styles';
import Buttons from '../../components/ButtonArray';
import EditModal from '../../components/EditModal';
import * as FileService from '../../services/fileService';

const Details = function( {route, navigation: { navigate }} ){
  
  const user = route.params.user;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  const getContact = async (location) => {
	  console.log(location);
	contact = await FileService.loadContact(location);
	
	
	// const newContact = {
		// id: contacts.length + 1,
		// name: input.name,
		// image: input.image,
		// number: input.number,
		// location: '',
	// };
	// setContacts([...contacts, newContact]);
	// setFilteredContacts([...filteredContacts, newContact]);
	// newContact.location = await fileService.addContact(newContact);
	//console.log(newContact);
	// setIsAddModalOpen(false);
	// const bla = await fileService.loadContact(newContact.location);
	// console.log(JSON.parse(bla));
  };

  console.log(getContact(user.location))
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




  return(	
	<View style={{flex: 1}}>
		{/* Top heading with contact name and image */}
		<View style={styles.heading}>
			{
			user.image !== ""
				?
				<Image 
					style={	styles.image	}
					source={{ uri: user.image }}
					resizeMode={ 'cover' } />
				:
				<View style={ [ styles.image, { backgroundColor: "#393E42" }] }>
					<Text style={{fontSize: 80, 
												textAlign:'center', 
												color:'white'}}>
						{ user.name[0] }
					</Text>
				</View>
			}
			<Text style={styles.name}>{ user.name }</Text>
		</View>

	{/* Buttons ! */}
	<Buttons 
		makeCall={() => callNumber(user.number)}
		sendText={() => textNumber(user.number)}
		editContact={() => setIsEditModalOpen(true)}
	/>
		

		<TouchableHighlight 
			style={ styles.card }
			activeOpacity={ 0.6 }
			underlayColor={ 'darkgray' }
			onPress={() => callNumber(user.number)}
		>
			<View style={ { flex: 1 } }>
				<Text style={ styles.phone }>Phone</Text>
				<Text style={ styles.number }>{ user.number }</Text>
			</View>
		</TouchableHighlight>

      <EditModal
        isOpen={isEditModalOpen}
        closeModal={() => setIsEditModalOpen(false)}
		  user={getContact(user.location)}
      />
	</View>
	)

};


export default Details;
