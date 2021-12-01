import { StyleSheet } from 'react-native';

export default StyleSheet.create({

	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},

	card: {
		flex: 0.04,
		margin: 10,
		minHeight: 40,
		borderRadius: 30,
		elevation: 4,
		backgroundColor: 'lightgray'
	},

	phone: {
		
		margin: 10,
		marginLeft: 20,
		marginBottom: 0,
		color: "darkblue"
	},

	number: {
		margin: 10,
		marginTop: 0,
		marginLeft: 20,
		color: '#393E42', 
	},

	name: {
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold'
	},

	heading: {
		margin: 20,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		// elevation: 1,
	}
}) 
