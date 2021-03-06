import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import {
	Text, TouchableOpacity, View
} from 'react-native';

const ImportModal = function ({
	isOpen, closeModal, importing, notAgain
}) {
	return (
		<Modal
			style={styles.modal}
			animationType={'slide'}
			transparent={true}
			isOpen={isOpen}
			closeModal={closeModal}
		>
			<Text style={ styles.prompt }>Would you like to import your contacts?</Text>
			<View style={ styles.buttonContainer }>
				<TouchableOpacity
					onPress={importing}
					style={[styles.button, styles.shadow]}
				>
					<Text style={styles.text}>Yes</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={closeModal}
					style={[styles.shadow, styles.button]}
				>
					<Text style={styles.text}>Not Now</Text>
				</TouchableOpacity>
			</View>
			<View style={ styles.buttonContainer }>
				<TouchableOpacity
					onPress={notAgain}
					style={[styles.shadow, styles.button, { height: 50 }]}
				>
					<Text style={styles.text}>Don not ask again</Text>
				</TouchableOpacity>
			</View>
		</Modal>
	);
};

ImportModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeModal: PropTypes.func.isRequired,
	importing: PropTypes.func.isRequired,
	notAgain: PropTypes.func.isRequired,
};

export default ImportModal;
