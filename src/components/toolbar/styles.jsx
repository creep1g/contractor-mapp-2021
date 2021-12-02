import { StyleSheet } from 'react-native';

export default StyleSheet.create ({
	
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#393E42',
  },
  toolbarAction: {
    alignItems: 'center',
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
	backgroundColor: '#393E42',
	padding: 5,
    fontSize: 30,
	elevation: 3
  },
});
