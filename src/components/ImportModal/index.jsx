import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import {
  Text, TouchableOpacity,
} from 'react-native';

const ImportModal = function ({
  isOpen, closeModal, importing,
}) {
  return (
    <Modal
      style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >
        <Text>Would you like to import your contacts?</Text>
        <TouchableOpacity
          onPress={importing}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>No</Text>
        </TouchableOpacity>
    </Modal>
  );
};

ImportModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  importing: PropTypes.func.isRequired,
};

export default ImportModal;
