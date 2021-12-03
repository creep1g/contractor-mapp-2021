import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Buttons = function({ makeCall, sendText, editContact, deleteContact }) {
	return(
		<View style={ styles.buttons }>

			{/* Call */}
			<TouchableHighlight
				style={ styles.button }
				activeOpacity={ 0.6 }
				underlayColor={ 'darkgreen' }
				onPress={() => makeCall()} >
				<AntDesign 
					name="phone" 
					style={[styles.icon, { backgroundColor: 'lime' }] }/>
			</TouchableHighlight>

			{/* TEXT */}
			<TouchableHighlight
				style={ styles.button }
				activeOpacity={ 0.6 }
				underlayColor={ 'darkblue' }
				onPress={() => sendText()} >
				<AntDesign
					name="message1"
					style={[ styles.icon, { backgroundColor: 'lightblue' } ]} />
			</TouchableHighlight>
				
			{/* EDIT */}

			<TouchableHighlight
				style={ styles.button }
				activeOpacity={ 0.6 }
				underlayColor={ 'darkgray' }
				onPress={() => editContact()} >
				<AntDesign
					name="edit"
					style={[ styles.icon, { backgroundColor: 'lightgray' } ]} />
			</TouchableHighlight>

			{/* DELETE */}

			<TouchableHighlight
				style={ styles.button }
				activeOpacity={ 0.6 }
				underlayColor={ 'darkred' }
				onPress={deleteContact} >
				<AntDesign
					name="delete"
					style={[ styles.icon, { backgroundColor: 'red' } ]} />
			</TouchableHighlight>

		</View>
	);
	
};

Buttons.propTypes = {
	makeCall: PropTypes.func.isRequired,
	sendText: PropTypes.func.isRequired,
	editContact: PropTypes.func.isRequired,
	deleteContact: PropTypes.func.isRequired,
};

export default Buttons;
