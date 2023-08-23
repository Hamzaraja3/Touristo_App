// onboarding1.js
import React from 'react';
import { Image, Text, ImageBackground, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Onboarding1 = () => {
  const navigation = useNavigation(); 
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
          title:'',
          subtitle: ''
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
          ),title:'',
          subtitle: ''
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
                  To get the best of your adventure you just need to leave and go where you like. We are waiting for you.
                </Text>
              </View>
            </ImageBackground>
          ),
          title:'',
          subtitle: ''
        },
      ]}
      onSkip={() => navigation.navigate('SignIn')}
      onDone={()=> navigation.navigate('SignIn')}
    />
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: width * 1.0,
    height: height * 1.0,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    paddingHorizontal: 20,
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
    fontSize: 16,
  },
  nextButtonText: {
    color: '#CAEAFF',
    fontSize: 16,
  },
});

export default Onboarding1;
