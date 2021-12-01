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
      
	<Search  filteredDataSource={ filteredDataSource } masterDataSource={ masterDataSource } setFilteredDataSource={ setFilteredDataSource }/>
			
		{
		name==="contactList"
		?
			<TouchableHighlight
        	style={styles.toolbarAction}
        	onPress={() => onAdd()}
      		>	
        	<AntDesign name="adduser" style={styles.toolbarActionText}/>

      		</TouchableHighlight>
	  	:

			<TouchableHighlight
    		style={styles.toolbarAction}
    		//disabled={hasSelected !== 1}
    		onPress={onModify}
      		>
        		<AntDesign name="edit"
          		style={[styles.toolbarActionText, !(hasSelected === 1) ? 				{ color: 'rgba(155, 155, 155, .5)' } : {}]}
        		/>
      			</TouchableHighlight>
		}

		{
		name==="detail"
		?
			<TouchableHighlight
        	style={styles.toolbarAction}
        	disabled={!hasSelected > 0}
        	onPress={onRemove}
      		>
        		<AntDesign name="delete"
          		style={[styles.toolbarActionText, !(hasSelected > 0) ? { 				 color: 'rgba(155, 155, 155, .5)' } : {}]}
        		/>
      		</TouchableHighlight>
		:
			<></>
		}
    </View>
  );
};

export default Toolbar;
