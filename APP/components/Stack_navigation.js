import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Onboarding1 from '../Screens/Onboarding1';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import ForgotPassword from '../Screens/ForgotPassword';
import Dashboard from '../Screens/Dashboard';
import BottomTab from './BottomTab';
import Details from '../Screens/Details';
const Stack = createNativeStackNavigator();
const Stack_navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Onboarding" component={Onboarding1} options={{headerShown:false}}/>
        <Stack.Screen name="SignIn" component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name="Sign Up" component={Signup} options={{headerShown:false}}/>
        <Stack.Screen name="Forgot Password" component={ForgotPassword} options={{headerShown:false}}/>
        <Stack.Screen name="Dashboards" component={BottomTab} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Stack_navigation