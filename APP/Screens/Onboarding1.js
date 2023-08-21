import React,{useState} from 'react';
import { Image,Text,ImageBackground,View,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const { width, height } = Dimensions.get('window');
const Onboarding1 = () => {
  
  return (
    <Onboarding
  
      pages={[
        {
            backgroundColor: '#FF6421',
            image: (
              <ImageBackground
                source={require('../assets/onboard1.png')}
                style={styles.imageBackground}
              >
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>
                    Life is brief, but the universe is
                    <Text style={{ color: '#FF6421' }}> vast</Text>.
                  </Text>
                  <Text style={styles.subtitle}>
                    At Tourista Adventures, we curate unique and immersive travel experiences to destinations around the globe.
                    
                  </Text>
                </View>
              </ImageBackground>
            ),
          },
        {
            backgroundColor: '#FF6421',
            image: (
              <ImageBackground
                source={require('../assets/onboard2.png')}
                style={styles.imageBackground}
              >
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>
                  The world is waiting for you, go  
                    <Text style={{ color: '#FF6421' }}> discover it</Text>.
                  </Text>
                  <Text style={styles.subtitle}>
                  Embark on an unforgettable journey by venturing outside of your comfort zone. The world is full of hidden gems just waiting to be discovered.
                    
                  </Text>
                </View>
              </ImageBackground>
            ),
        },
        {
            backgroundColor: '#FF6421',
            image: (
              <ImageBackground
                source={require('../assets/onboard3.png')}
                style={styles.imageBackground}
              >
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>
                  People don’t take trips, trips take 
                    <Text style={{ color: '#FF6421' }}> people</Text>.
                  </Text>
                  <Text style={styles.subtitle}>
                  To get the best of your adventure you just need to leave and go where you like. we are waiting for you
                    
                  </Text>
                </View>
              </ImageBackground>
            ),
        },
      ]}
    />
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
    imageBackground: {
     
      width: width*1.0,
      height: height*1.0,
    },
    contentContainer: {
    flex:1,
      justifyContent: 'flex-end', // Align to the bottom of the screen
      marginBottom: 50, // Add some spacing from the bottom
      paddingHorizontal: 20, // Add horizontal padding
    },
    title: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 10,
    },
    subtitle: {
      textAlign: 'center',
      color: '#ffff',
      fontWeight: '400',
      fontSize: 16,
    },
    skipButton: {
        position: 'absolute',
       
      },
      skipButtonText: {
        color: '#CAEAFF',
        fontSize: 16,
      },
      nextButtonText: {
        color: '#CAEAFF',
        fontSize: 16,
      },
  });