import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import Buttons from '../../components/ButtonArray';

const Details = function( {route, navigation: { navigate }} ){
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
		<Buttons />
		

			<TouchableHighlight 
				style={ styles.card }
				activeOpacity={ 0.6 }
				underlayColor={ 'darkgray' }
				onPress={() => console.log('calling from card')}
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
