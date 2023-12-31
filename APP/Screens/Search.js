import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filtered = data.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };
    const data = [
        {
            id: 1,
            image: require('../assets/R1.png'),
            name: 'Hisma Desert',
            location: 'Saudi Arabia',
            Rating: 4.8,
            price: '$459/'
        },
        {
            id: 2,
            image: require('../assets/R2.png'),
            name: 'Hisma Desert',
            location: 'Zeero Point, Sylhet',
            Rating: 4.4,
            price: '$924/'
        },
        {
            id: 3,
            image: require('../assets/R3.png'),
            name: 'The HSB Vortex',
            location: 'Zeero Point, Sylhet',
            Rating: 4.2,
            price: '$624/'
        },
        {
            id: 4,
            image: require('../assets/R4.png'),
            name: 'Hisma Desert',
            location: 'Zeero Point, Sylhet',
            Rating: 4.4,
            price: '$831/'
        },
    ]
    const Item = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={item.image} style={styles.image} resizeMode='cover' />
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconfavBtn}>
                        <Icon name="favorite-border" size={24} color="white" /></TouchableOpacity>
                </View>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.locationContainer}>
                        <Icon2 name='location' size={24} color="#7D848D" />
                        <Text style={styles.itemLocation}>{item.location}</Text>
                    </View>
                   
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                        <Text style={{fontFamily:'Poppins-Regular',paddingVertical:2}}>Person</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
                <Searchbar
        placeholder="Search Places"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBox}
        icon={() => <Icon2 name="search" size={30} color="grey" />}
        clearIcon={searchQuery.length > 0 ? () => (
          <Icon2
            name="close-o"
            size={20}
            color="grey"
            onPress={() => {
              setSearchQuery(''); 
              filterData('');
            }}
          />
        ) : undefined}

      />
            <Text style={styles.mainHeading}>Search Places</Text>
            <FlatList
               data={searchQuery ? filteredData : data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
            />
        </View>
    )
}

export default Search
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  searchBox: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '100%',
    marginTop: 20
  },
  mainHeading: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
   marginVertical:15
  },
  flatListContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    flex: 1,
    width: '47%',
    backgroundColor: 'white',
    borderRadius: 14,
    marginBottom: 16,
    marginHorizontal: 4,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 12,
  },
  itemDetails: {
    marginTop: 8,
  },
  itemName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
    maxWidth:'100%'
  },
  itemLocation: {
    fontSize: 12,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    maxWidth: '90%'
   
  },
  iconContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  iconfavBtn: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
  },
    itemPrice: {
      fontSize: 16,
      color: '#FF6421',
      fontFamily: 'Poppins-Regular'
  },
});