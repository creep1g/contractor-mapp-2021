import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import style from './styles';

const ContactList = ( { contacts, onLongPress, onSelect, selectedContacts } ) => {


	const isSelected = (id) => {
		if (selectedContacts.indexOf(id) !== -1) {
			return true;
		}
		else {
			return false;
		}
	}

	const sortedContacts = contacts.sort((first, second) => {
		return first.name > second.name ? 1 : -1;
			});

	return ( 
		<FlatList
			numColumns={1}
			data={sortedContacts}
			renderItem={ ({ item }) => (
				<TouchableOpacity style={ { opacity: isSelected(item.id) ? 0.5 : 1 } }>
						<View style={ style.contact } >
							<Image 
								style={ style.image }
								source={{ uri: item.image }}
								resizeMode={ 'cover' } />
							<Text style={ style.name }> { item.name } </Text>
						</View>
					</TouchableOpacity>
			
		
			)
		}

			keyExtractor={(item) => item.id }
		/>
	)
};
export default ContactList;
