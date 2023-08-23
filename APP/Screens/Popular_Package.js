import { View, Text,StyleSheet,FlatList,Image,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
const Popular_Package = () => {
    const data = [
        {
            id: 1,
            image: require('../assets/R1.png'),
            name: 'Hisma Desert',
            calender: '16 July-28 July',
            Rating: 4.8,
            price: '$459',
            person:'24 Person Joined'
        },
        {
            id: 2,
            image: require('../assets/R2.png'),
            name: 'Hisma Desert',
            calender: '16 July-28 July',
            Rating: 4.4,
            price: '$924',
            person:'30 Person Joined'
        },
        {
            id: 3,
            image: require('../assets/R3.png'),
            name: 'The HSB Vortex',
            calender: '16 July-28 July',
            Rating: 4.2,
            price: '$624',
            person:'35 Person Joined'
        },
        {
            id: 4,
            image: require('../assets/R4.png'),
            name: 'Hisma Desert',
            calender: '16 July-28 July',
            Rating: 4.4,
            price: '$831',
            person:'15 Person Joined'
        },
    ]
    const Item = ({ item }) => {
        const renderStars = () => {
            const stars = [];
            for (let i = 0; i < 3; i++) {
                stars.push(<Icon key={i} name="star" size={18} color="#FFD338" />);
            }
            return stars;
        };
        return (
          <View style={styles.itemContainer}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image}resizeMode='stretch' />
            </View>
            <View style={styles.dataContainer}>
                <View style={{flexDirection:'row'}}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <Icon name='calendar-month'size={18}/>
              <Text style={styles.itemcalender}>{item.calender}</Text>
              </View>
              <View>
              <View style={styles.ratingContainer}>
                        {renderStars(item.rating)}
                        <Text>{item.Rating}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={require('../assets/profile.png')} style={styles.imgProfile}/>
                        <Text>{item.person}</Text>
                    </View>
              </View>
            </View>
          </View>
        );
      };
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>All Popular Trip Package</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  )
}

export default Popular_Package
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
   
    },
    mainHeading: {
      fontSize: 20,
      fontFamily: 'Poppins-Bold',
      textAlign: 'left',
      width: '100%',
      marginTop: 20,
      marginBottom: 10,
    },
    itemContainer: {
      width: '98%',
      height: 130,
      flexDirection: 'row',
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
    },
    imageContainer: {
      width: 100,
      height: 130,
      borderRadius: 8,
    },
    image: {
      width: '100%',
      height: '100%',
    
    },
    dataContainer: {
      flex: 1,
      marginLeft: 10,
    },
    itemName: {
      fontSize: 16,
    fontFamily:'Poppins-Bold',
      marginBottom: 6,
      width:'70%'
    },
    itemcalender: {
      fontSize: 14,
      color: '#888',
      marginBottom: 6,
      fontFamily:'Poppins-Regular'
    },
    itemRating: {
      fontSize: 14,
      marginBottom: 6,
    },
    itemPrice: {
        backgroundColor:'#FF6421',
      fontSize: 16,
     fontFamily:'Poppins-Regular',
      color: 'white',
      borderRadius:10,
      padding:3,
      paddingHorizontal:6

    },
    flatListContainer: {
      paddingBottom: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical:8
    },
    imgProfile:{
        width:55,
        height:20
    }
  });
  