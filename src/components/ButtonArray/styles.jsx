import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},

	icon: {
		fontSize: 16,
		padding: 10,
		color: 'white',
		borderRadius: 10,
		overflow: 'hidden',
		elevation: 4,
		// IOS SHADOW
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowOffset: {
			height: 0.2,
			width: 1
		}

	},

	button:	{
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 10,
		elevation: 4,
		// IOS shadow
		shadowColor: 'black',
		shadowOpacity: 0.2,
		shadowOffset: {
			height: 0.2,
			width: 1
		}

	},
}
);
