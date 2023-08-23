import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,ScrollView, ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
const screenHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const Details = () => {
    const route = useRoute();
    const [isExpanded, setIsExpanded] = useState(false);
    const data = route.params.Data;
    console.log(data)
    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
    const showmessage=()=>{
        ToastAndroid.show('Booked!', ToastAndroid.SHORT);
    }
    return (
        <View style={[styles.container, { height: screenHeight }]}>
            <Image source={data.image} style={styles.img} resizeMode='cover' />
            <View style={styles.DetailCard}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{data.name}</Text>
                    <Image source={require('../assets/profile2.png')} style={styles.imgProfile} />
                </View>
                <Text style={styles.AddressText}>Chang Wat Phang-nga</Text>
                <View style={styles.locationContainer}>
                    <Icon2 name='location' size={24} color="#7D848D" />
                    <Text style={styles.headerText2}>{data.location}</Text>
                    <Icon1 name='star' size={24} color="#FFD338" style={styles.staricon} />
                    <Text style={styles.ratingText}>{data.rating}(256)</Text>
                    <Text style={styles.priceText}>$80/</Text>
                    <Text style={styles.personText}>Person</Text>
                </View>
                <View style={styles.imagesContainer}>
                    <Image source={require('../assets/1.png')} style={styles.images} />
                    <Image source={require('../assets/2.png')} style={styles.images} />
                    <Image source={require('../assets/3.png')} style={styles.images} />
                    <Image source={require('../assets/4.png')} style={styles.images} />
                    <Image source={require('../assets/5.png')} style={styles.images} />
                </View>
                    <Text style={styles.paraHeading}>About Destination</Text>
                    <ScrollView style={{ maxHeight: isExpanded ? undefined : 120 }}>
                    <Text style={styles.paragraph}>Experience the ultimate vacation package with our beach travel package. From airline tickets to recommended hotel rooms and transportation, we have everything you need we have everything you need
                    {isExpanded ? '.' : ' ETC...'}
                    {!isExpanded && (
                        <TouchableOpacity onPress={toggleReadMore}>
                            <Text style={styles.readMore}>Read More</Text>
                        </TouchableOpacity>
                    )}</Text></ScrollView>
                <TouchableOpacity style={styles.btn} onPress={showmessage}><Text style={styles.submitbtn}>Book Now</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Details
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    img: {
        width: '100%',
        height: '50%',
    },
    DetailCard: {
        width: '100%',
        height: '55%',

        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 13,
        backgroundColor: '#FFFFFF',
        top: -27,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        alignSelf: 'center',
        padding: 12
    },
    header: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
        marginHorizontal: 10
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        textAlign: 'left',
        width: '80%'
    },
    imgProfile: {
        width: 40,
        height: 40
    },
    headerText2: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        width: '35%'
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 18,
    },
    AddressText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 6
    },
    ratingText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 4
    },
    priceText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#FF6421',
        width: '18%',
        textAlign: 'right'
    },
    personText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    imagesContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 5,
    },
    images: {
        width: 40,
        height: 40
    },
    paraHeading: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        marginTop:10
    },
    paragraph: {
        fontSize: 13,
        fontFamily:'Poppins-Regular'
       
      },
      readMore: {
        color: '#FFD521',
      },
      btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF6421',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom:4
    },
    submitbtn: {
        textAlign: 'center',
        color:'white'
    },
});
