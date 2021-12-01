import React from 'react';
import {Linking, Alert, View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import styles from './styles';
import Buttons from '../../components/ButtonArray';

const Details = function( {route, navigation: { navigate }} ){
	
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


	// We probably need to pass in file location, for editing and such
	const user = route.params.user;
	console.log(user);
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
			</View>
	)

};


export default Details;
