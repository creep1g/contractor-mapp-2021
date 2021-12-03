import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	button: {
		textAlign: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 10,
		overflow: 'hidden',
		width: 150,
		height: 40,
		justifyContent: 'center',
		backgroundColor: '#393E42',
	},

	shadow: {
		// Shadow for iOS
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 2,
		},
		// Elevation for android
		elevation: 3,
	},

	text: {
		marginTop: 0,
		padding: 5,
		textAlign: 'center',
		color: 'white'
	},
});
