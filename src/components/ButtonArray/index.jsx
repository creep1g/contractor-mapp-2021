import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const Buttons = function() {
	return(
			<View style={ styles.buttons }>

				{/* Call */}
				<TouchableHighlight
					style={ styles.button }
					activeOpacity={ 0.6 }
					underlayColor={ "darkgreen" }
					onPress={() => console.log('CALLING!!')} >
					<AntDesign 
						name="phone" 
						style={[styles.icon, { backgroundColor: 'lime' }] }/>
				</TouchableHighlight>

				{/* TEXT */}
				<TouchableHighlight
					style={ styles.button }
					activeOpacity={ 0.6 }
					underlayColor={ "darkblue" }
					onPress={() => console.log('Send SMS')} >
					<AntDesign
						name="message1"
						style={[ styles.icon, { backgroundColor: 'lightblue' } ]} />
				</TouchableHighlight>
				
				{/* EDIT */}

				<TouchableHighlight
					style={ styles.button }
					activeOpacity={ 0.6 }
					underlayColor={ "darkgray" }
					onPress={() => console.log('Editing!')} >
					<AntDesign
						name="edit"
						style={[ styles.icon, { backgroundColor: 'lightgray' } ]} />
				</TouchableHighlight>

				{/* DELETE */}

				<TouchableHighlight
					style={ styles.button }
					activeOpacity={ 0.6 }
					underlayColor={ "darkred" }
					onPress={() => console.log('DELETEING')} >
					<AntDesign
						name="delete"
						style={[ styles.icon, { backgroundColor: 'red' } ]} />
				</TouchableHighlight>

			</View>
	)
	
}

export default Buttons;
