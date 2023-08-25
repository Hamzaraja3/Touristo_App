import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const Popular_places = () => {
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
        const renderStars = () => {
            const stars = [];
            for (let i = 0; i < 3; i++) {
                stars.push(<Icon key={i} name="star" size={18} color="#FFD338" />);
            }
            return stars;
        };
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
                    <View style={styles.ratingContainer}>
                        {renderStars(item.rating)}
                        <Text>{item.Rating}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                        <Text>Person</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainHeading}>All Popular Places</Text>
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

export default Popular_places
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    mainHeading: {
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
        textAlign: 'left',
        width: '92%',
    },
    flatListContainer: {
        paddingVertical: 10
    },
    itemContainer: {
        width: '47%',
        height: 315,
        borderRadius: 14,
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginBottom: 16,
        margin: 4
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 12,

    },
    itemDetails: {
        marginTop: 8,
    },
    itemName: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold'
    },
    itemLocation: {
        fontSize: 13,
        color: '#888',
        fontFamily: 'Poppins-Regular',
        width: "90%"
    },
    itemPrice: {
        fontSize: 16,
        color: '#FF6421',
        fontFamily: 'Poppins-Regular'
    },
    iconContainer: {
        position: 'absolute',
        top: 15,
        right: 15,

    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,

    },
    iconfavBtn:{
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 20,
        width:30,
        height:30,
        alignItems: 'center',paddingVertical:3
    }
});