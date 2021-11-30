import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import data from '../../data/data.json';
import styles from './styles';


const Search = () => {

	const [ search, setSearch ] = useState('');
	const [ filteredDataSource, setFilteredDataSource ] = useState([]);
	const [ masterDataSource, setMasterDataSource ] = useState(data.contacts);

	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((responseJson) => {
				setFilteredDataSource(responseJson);
				setMasterDataSource(responseJson);
			})
			.catch((error) => { 
				console.error(error);
			});

	}, []);


  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.name.toUpperCase()}
      </Text>
    );
  };


	const searchFilterFunction = ( text ) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
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
			<View style={{flex:1}}>
				<SearchBar
					round
					// backgroundColor={"#444444"}
					style={ styles.searchBar }
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

