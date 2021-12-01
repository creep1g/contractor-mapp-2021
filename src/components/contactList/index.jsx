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
		return first.name.toUpperCase() > second.name.toUpperCase() ? 1 : -1;
			});

	const hasImage = (image) => {
		if (image.length > 0) {
			return true;
		} 
	};

	return ( 
		<FlatList
			numColumns={1}
			data={sortedContacts}
			renderItem={ ({ item }) => (
				<TouchableOpacity 
					onLongPress={() => onLongPress(item.id)} 
					onPress={() => onSelect(item)}
					style={ { opacity: isSelected(item.id) ? 0.5 : 1 } }>
					
					<View style={[ style.contact, { 
						backgroundColor: isSelected(item.id) 
														 ? 'lightblue' 
														 : 'lightgrey' } ]} >

						{
							hasImage(item.image)
								?
							<Image 
								style={ style.image }
								source={{ uri: item.image }}
								resizeMode={ 'cover' } />
								:
								<Text style={{ fontSize: 30, margin: 20, textAlign: 'center' }}>{ item.name[0] }</Text>
						}

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
