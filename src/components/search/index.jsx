import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import styles from './styles';


const Search = ( { masterDataSource, filteredDataSource, setFilteredDataSource } ) => {

  const [ search, setSearch ] = useState('');
	
	const searchFilterFunction = ( text ) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
		setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
		setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
	};


	return (
		<SafeAreaView style={{flex:1}}>
			<View>
				<SearchBar
					round
					containerStyle={styles.container}
					inputContainerStyle={styles.inputContainerStyle}
					searchIcon={{ size: 24 }}
					onChangeText={(text) => searchFilterFunction(text)}
					onClear={(text) => searchFilterFunction('')}
					placeHolder="Search..."
					value={search}
				/>
			</View>
		</SafeAreaView>
	)
} 

export default Search;

