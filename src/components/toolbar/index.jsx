import React from 'react';
import { View, TouchableHighlight} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import Search from '../search';
import PropTypes from 'prop-types';

const Toolbar = function ({ onAdd, setFilteredDataSource, masterDataSource
}) { 
	return (
		<View
			styleName="horizontal"
			style={styles.toolbar}
		>
			<Search  
				masterDataSource={ masterDataSource } 
				setFilteredDataSource={ setFilteredDataSource }/>
			<TouchableHighlight
				style={styles.toolbarAction}
				onPress={() => onAdd()} >
				<AntDesign name="adduser" style={styles.toolbarActionText}/>
			</TouchableHighlight>
		</View>);
};

Toolbar.propTypes = {
	onAdd: PropTypes.func.isRequired,
	setFilteredDataSource: PropTypes.func.isRequired,
	masterDataSource: PropTypes.array.isRequired,
};

export default Toolbar;
