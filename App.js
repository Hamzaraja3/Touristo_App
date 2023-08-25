import { View, Text } from 'react-native'
import React from 'react'
import Splash from './APP/Screens/Splash'
import Onboarding1 from './APP/Screens/Onboarding1'
import Signin from './APP/Screens/Signin'
import Signup from './APP/Screens/Signup'
import ForgotPassword from './APP/Screens/ForgotPassword'
import Stack_navigation from './APP/components/Stack_navigation'
import Dashboard from './APP/Screens/Dashboard'
import Popular_places from './APP/Screens/Popular_places'
import Popular_Package from './APP/Screens/Popular_Package'
import Favourite_Places from './APP/Screens/Favourite_Places'
import User_Chat from './APP/Screens/User_Chat'
import Otp_Verfication from './APP/Screens/Otp_Verfication'
const App = () => {
  return (
  //  <Splash/>
  //  <Onboarding1/>
  // <Signup/>
  // <ForgotPassword/>
  <Stack_navigation/>
  // <Dashboard/>
  // <Popular_places/>
  // <Popular_Package/>
  // <User_Chat/>
  // <Otp_Verfication/>
  )
}

export default App