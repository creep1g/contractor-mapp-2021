import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	buttonContainer: {
		// flex: 1,
		flexDirection: 'row',
		paddingBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		marginTop: 0,
		padding: 5,
		textAlign: 'center',
		color: 'white'
	},

	textInput: {
		fontSize: 10,
		marginBottom: 5,
	},

	button: {
		textAlign: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 5,
		borderRadius: 10,
		overflow: 'hidden',
		width: 120,
		height: 30,
		backgroundColor: '#393E42',
	},

	input: {
		marginTop: 2,
		// padding: 5,
		borderColor: 'black',
		borderWidth: 0.4,
		height: 25,
		elevation: 1,
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

});
