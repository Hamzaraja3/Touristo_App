import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const Favourite_places = () => {
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
            location: 'Zeero Point, Sylhettt',
            Rating: 4.4,
            price: '$831/'
        },
        {
          id: 5,
          image: require('../assets/onboard3.png'),
          name: 'Hisma Desert',
          location: 'Zeero Point, Sylhet',
          Rating: 4.4,
          price: '$831/'
      },
      {
        id: 6,
        image: require('../assets/onboard2.png'),
        name: 'Aonang Villa Resort',
        location: 'Av Damero, Mexico',
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
                        <Icon name="favorite-border" size={24} color="#FE2352" /></TouchableOpacity>
                </View>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.locationContainer}>
                        <Icon2 name='location' size={24} color="#7D848D" />
                        <Text style={styles.itemLocation}>{item.location}</Text>
                    </View>
                  
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>Favorite Places</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
            />
        </View>
    )
}

export default Favourite_places
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  mainHeading: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
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
});

