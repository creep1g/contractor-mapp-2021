import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import {
  Text, TouchableOpacity, View
} from 'react-native';

const ImportModal = function ({
  isOpen, closeModal, importing,
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
            <Text style={styles.text}>No</Text>
          </TouchableOpacity>
		</View>
    </Modal>
  );
};

ImportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  importing: PropTypes.func.isRequired,
};

export default ImportModal;
