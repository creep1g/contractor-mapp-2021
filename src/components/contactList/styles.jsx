import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	
	contact: {
		backgroundColor: 'lightgrey',
		margin: 10,
		padding: 10,
		height: 100,
		flexDirection: 'row',
		borderRadius: 10,
		elevation: 4,
		// IOS SHADOW
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowOffset: {
			height: 0.2,
			width: 1
		}
	},

	name: {
		position: 'absolute',
		fontSize: 25,
		top: 35,
		left: 111,
		paddingLeft: 5
	},

	image: {
		width: 80,
		height: 80,
		borderRadius: 50,
	}
});
