import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

	prompt: {
		textAlign: 'center',
		color: 'black',
		fontSize: 16,
		padding: 5,
		margin: 5,
		marginBottom: 50,
	},

  text: {
    marginTop: 0,
    padding: 5,
    textAlign: 'center',
		color: 'white',
  },

  button: {
		justifyContent: 'center',
    textAlign: 'center',
		marginLeft: 20,
    borderRadius: 10,
		overflow: 'hidden',
		width: 120,
    height: 40,
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
	});
