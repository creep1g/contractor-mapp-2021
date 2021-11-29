import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './styles';

const ContactList = () => {
	const contacts = [
		{
			name: 'Steven',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg'
		},

		{
			name: 'Steven',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg'
		},

		{
			name: 'Allison',
			image: 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4b_438x447.jpg'
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
			});

	return ( 
		<FlatList
			numColumns={1}
			data={sortedContacts}
			keyExtractor={(item) => { item.name }}
			renderItem={ ({ item }) => (
				<View>
					<TouchableOpacity style={ style.contact }> 
						<Image 
							style={ style.image }
							source={{ uri: item.image }}
							resizeMode={ 'cover' } />
						<Text style={ style.name }> { item.name } </Text>
					</TouchableOpacity>
				</View>
			
		
	)
}
		/>
	)
};
export default ContactList;
