import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import contacts from './obj';

const ContactList = () => {
	const contacts = [
		{
			name: 'Steven',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			name: 'Steven',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			name: 'Allison',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			name: 'Margret',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			name: 'John',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			name: 'Kyle',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			name: 'Darth Vader',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		}];

	const sortedContacts = contacts.sort((first, second) => {
		return first.name > second.name ? 1 : -1;
			}).map((contact, i) => {
				return (
					<View key={i}>
						<Text> { contact.name }</Text>
						<Image source={{ uri: contact.image }} />
					</View>
				)
		});

	return ( 
		<View>
			{ sortedContacts }
		</View>
	)
}

export default ContactList;
