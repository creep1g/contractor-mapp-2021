import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';

const ContactInputHandler = function ({addContact, takePhoto, selectPhoto, closeModal}) {
  const [inputs, setInputs] = useState({
    name: '',
    number: '',
    image: '',
  });

  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]:value,
    });
  };

  return (
    <KeyboardAvoidingView>
      <Text style={styles.inputText}>Name</Text>
      <TextInput
        placeholder="Enter name"
        placeholderTextColor="gray"
        value={inputs.name}
        onChangeText={(text) => inputHandler('name', text)}
        style={styles.input}
      />
      <Text style={styles.inputText}>Phone number</Text>
      <TextInput
        placeholder="Enter phone number"
        placeholderTextColor="gray"
        value={inputs.number}
        keyboardType='numeric'
        onChangeText={(text) => inputHandler('number', text)}
        style={styles.input}
      />
      <Text style={styles.inputText}>Photo</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={takePhoto}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectPhoto}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>From cameraroll</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => addContact(inputs)}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Add contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={closeModal}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};

export default ContactInputHandler;