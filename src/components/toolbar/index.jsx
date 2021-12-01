import React from 'react';
import {
  View, TouchableHighlight, Text, TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Search from '../search';

const Toolbar = function ({
  hasSelected, name, onAdd, onRemove, onModify, filteredDataSource, setFilteredDataSource, masterDataSource
}) {
  return (
    <View
      styleName="horizontal"
      style={styles.toolbar}
    >
     
      <Search  
	    filteredDataSource={ filteredDataSource } 
		masterDataSource={ masterDataSource } 
		setFilteredDataSource={ setFilteredDataSource }/>
	  
	  <TouchableHighlight
		style={styles.toolbarAction}
	    onPress={() => onAdd()} >
	
		<AntDesign name="adduser" style={styles.toolbarActionText}/>
	  
	  </TouchableHighlight>

    </View>
  );
};

export default Toolbar;
