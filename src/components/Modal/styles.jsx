import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        alignItems: 'center',
				height: 250,
        justifyContent: 'center',
        borderRadius: 10,
        width: winWidth - 100,
        backgroundColor: 'white',
				elevation: 8,
        padding: 40
    },
    divider: {
        marginTop: 10,
        marginBottom: 10
    }
});
