import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './styles';

const ContactList = () => {
	const contacts = [
		{
			id: 1,
			name: 'Steven',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg'
		},

		{
			id: 2,
			name: 'Steven',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg'
		},

		{
			id: 3,
			name: 'Allison',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg'
		},

		{
			id: 4,
			name: 'Margret',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			id: 5,
			name: 'John',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			id: 6,
			name: 'Kyle',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		},

		{
			id: 7,
			name: 'Darth Vader',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg.img.jpg'
		}];

	const sortedContacts = contacts.sort((first, second) => {
		return first.name > second.name ? 1 : -1;
			});

	return ( 
		<FlatList
			numColumns={1}
			data={sortedContacts}
			renderItem={ ({ item }) => (
				<View key={item.id}>
					<TouchableOpacity key={item.id} style={ style.contact }> 
						<Image 
							style={ style.image }
							source={{ uri: item.image }}
							resizeMode={ 'cover' } />
						<Text style={ style.name }> { item.name } </Text>
					</TouchableOpacity>
				</View>
			
		
			)
		}

			keyExtractor={(item) => { item.id }}
		/>
	)
};
export default ContactList;
