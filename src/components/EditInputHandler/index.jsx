
import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import * as imageService from '../../services/imageService';
import { addImage, } from '../../services/fileService';

const EditInputHandler = function ({updateContact ,selectPhoto, closeModal, user}) {
	
	const userObj = JSON.parse(user);

	const [inputs, setInputs] = useState({
    name: userObj.name,
    number: userObj.number,
    image: userObj.image,
  });
	
  const inputHandler = (name, value) => {
    setInputs({
      ...inputs,
      [name]:value,
    });
  };

  const takePhoto = async () => {
	  const photo = await imageService.takePhoto();
	  console.log(photo);
    inputHandler('image', photo);
	  if (photo.length > 0) {await addImage(photo)}
    
  }

  const selectFromCameraRoll = async () => {
    const photo = await imageService.selectFromCameraRoll();
    console.log(photo);
    inputHandler('image', photo);
	  if (photo.length > 0) {await addImage(photo)}
  }

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
          onPress={() => takePhoto()}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Take photo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => selectFromCameraRoll()}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>From cameraroll</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
		  onPress={() => updateContact(inputs)}
          style={styles.shadow, styles.button}
        >
          <Text style={styles.text}>Update Contact</Text>
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

export default EditInputHandler;
