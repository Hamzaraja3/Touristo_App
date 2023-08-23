import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const Dashboard = ({navigation}) => {
  const data = [
    {
      id: 1,
      image: require('../assets/onboard1.png'),
      name: 'Khai island beach',
      profile:require('../assets/profile.png'),
      location: 'Thailand',
      rating: 4.9
    },
    {
      id: 2,
      image: require('../assets/onboard2.png'),
      name: 'Hisma Desert Resort',
      profile:require('../assets/profile.png'),
      location: 'Saudi Arabia',
      rating: 4.9
    },
    {
      id: 3,
      image: require('../assets/onboard3.png'),
      name: 'Hisma island',
      profile:require('../assets/profile.png'),
      location: 'Saudi Arabia',
      rating: 4.9
    },
    {
      id: 4,
      image: require('../assets/onboard3.png'),
      name: 'Hisma island',
      profile:require('../assets/profile.png'),
      location: 'Saudi Arabia',
      rating: 4.9
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Details',{Data:item})}>
        <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
        <View style={styles.iconContainer}>
          <Icon name="bookmark" size={24} color="white" />
        </View>
        <View style={styles.listTextmain}>
          <View style={styles.textContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.locationContainer}>
          <Icon2 name='location' size={24} color="#7D848D" />
          <Text style={styles.itemLocation}>{item.location}</Text>
          <Image source={item.profile} style={styles.iconimg} resizeMode="cover" />
        </View>
          </View>
          <View style={styles.ratingContainer}>
            <Icon1 name='star' size={24} color="#FFD338" style={styles.staricon} />
            <Text style={styles.itemRating}>{item.rating}</Text>
          </View>
          
        </View>
       
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Discover the wonders of the
        <Text style={{ color: '#FF6421', fontWeight: 'bold' }}> world!</Text>
      </Text>
      <View style={styles.middleHeading}>
        <Text style={styles.middleText1}>Best Destination</Text>
        <TouchableOpacity>
          <Text style={styles.middleText2}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  middleHeading: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  middleText1: {
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    width: '80%',
  },
  middleText2: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FF6421',
  },
  itemContainer: {
    width: '60%',
    height: '75%',
    borderRadius: 14,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    padding: 10,
    flex: 1,
  },
  itemImage: {
    width: '100%',
    height: '80%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  listTextmain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    top:-19
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  itemRating: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  itemLocation: {
    color: '#888',
    fontSize: 14,
  },
  flatListContent: {
   
  },
  iconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  iconimg: {
    width: 60,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
    left:40
  },
  itemName:{
    fontFamily:'Poppins-Bold'
  }
});

export default Dashboard;