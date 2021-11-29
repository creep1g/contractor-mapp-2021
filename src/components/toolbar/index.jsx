import React from 'react';
import {
  View, TouchableHighlight, Text, TextInput,
} from 'react-native';
import styles from './styles';

const Toolbar = function ({
  hasSelected, name, onAdd, onRemove, onModify,
}) {
  return (
    <View
      styleName="horizontal"
      style={styles.toolbar}
    >

			<TextInput 
				style={{backgroundColor: 'white', width: 120, borderRadius:40, textAlign: 'center'}}> 
				Search 
			</TextInput>
      
			<TouchableHighlight
        style={styles.toolbarAction}
        onPress={() => onAdd()}
      >
        <Text style={styles.toolbarActionText}>
          Add
          {name}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        disabled={hasSelected !== 1}
        onPress={onModify}
      >
        <Text
          style={[styles.toolbarActionText, !(hasSelected === 1) ? { color: 'rgba(155, 155, 155, .5)' } : {}]}
        >
          Modify
          {' '}
          {name}
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.toolbarAction}
        disabled={!hasSelected > 0}
        onPress={onRemove}
      >
        <Text
          style={[styles.toolbarActionText, !(hasSelected > 0) ? { color: 'rgba(155, 155, 155, .5)' } : {}]}
        >
          Delete
          {' '}
          {name}
        </Text>


      </TouchableHighlight>
    </View>
  );
};

export default Toolbar;
