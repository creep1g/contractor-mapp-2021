import React from 'react';
import NativeModal from 'react-native-modal';
import { KeyboardAvoidingView, View, Text } from 'react-native';
import styles from './styles';

const Modal = ({ isOpen, closeModal, title, children }) => (
	<KeyboardAvoidingView>
    <NativeModal
        isVisible={isOpen}
        hasBackdrop={true}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={["up", "down"]}
			  style={styles.modal}
        >
        <View style={styles.body}>
            <Text>{title}</Text>
            {children}
        </View>
    </NativeModal>
		</KeyboardAvoidingView>
);

export default Modal;
