import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../Screens/Dashboard';
import Calendar from '../Screens/Calendar';
import Search from '../Screens/Search';
import Message from '../Screens/Message'
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    tabBarOptions={{
        activeTintColor: '#FF6421', // Active tab color for all tabs
    
      }}
    screenOptions={({ route }) => ({
      tabBarStyle: {
        backgroundColor: '#f4f4f4',
        paddingBottom: 3,
      },
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = 'home';
        } else if (route.name === 'Calendar') {
          iconName = 'calendar';
        } else if (route.name === 'Search') {
          iconName = 'search';
          return (
            <View
             style={{
                backgroundColor: '#FF6421',
                borderRadius: 999, 
                padding: 10, 
              }}
            >
              <Icon name={iconName} size={size} color={'white'} />
            </View>
          );
        } else if (route.name === 'Message') {
          iconName = 'message-circle';
        } else if (route.name === 'Profile') {
          iconName = 'user';
        }

        
        return <Icon name={iconName} size={size} color={color} />;
      },
      
    })}
  >
          <Tab.Screen name="Dashboard" component={Dashboard} />
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="Search" component={Search} options={{ tabBarLabel: () => null }} />
          <Tab.Screen name="Message" component={Message} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      );
    };



export default BottomTab