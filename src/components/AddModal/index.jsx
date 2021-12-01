import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import ContactInputHandler from '../ContactInputHandler';

const AddModal = function ({
  isOpen, closeModal, addContact, takePhoto, selectPhoto,
}) {
  return (
    <Modal
      style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >

      <ContactInputHandler
        style={styles.modal}
        closeModal={closeModal}
        addContact={addContact}
        takePhoto={takePhoto}
        selectPhoto={selectPhoto}
      />
	
    </Modal>
  );
};

AddModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,

};

export default AddModal;
