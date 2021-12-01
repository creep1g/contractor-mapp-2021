import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';
import EditInputHandler from '../EditInputHandler';

const EditModal = function ({
  isOpen, closeModal, user, 
}) {
	console.log("This is user");
	console.log(user);
  return (
    <Modal
      style={styles.modal}
      isOpen={isOpen}
      closeModal={closeModal}
    >

      <EditInputHandler
        style={styles.modal}
        closeModal={closeModal}
		user={user}
      />
    </Modal>
  );
};

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default EditModal;
