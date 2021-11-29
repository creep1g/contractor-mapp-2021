import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 0,
    padding: 5,
    textAlign: 'center',
  },

  textInput: {
    fontSize: 10,
    marginBottom: 5,
  },

  button: {
    textAlign: 'center',
    margin: 10,
    borderColor: 'black',
    borderWidth: 0.2,
    // borderRadius: 10,
    height: 30,
    backgroundColor: '#BCFCF3',
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
