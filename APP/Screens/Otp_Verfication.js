import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import React,{useState} from 'react'

const Otp_Verfication = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputRefs = [];
  
    const handleOtpChange = (index, value) => {
      if (value.length > 1) {
        value = value.charAt(value.length - 1);
      }
  
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      if (index < otpInputRefs.length - 1 && value !== '') {
        otpInputRefs[index + 1].focus();
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Otp Verfication</Text>
      <Text style={styles.childText}>Please check your email imanefh28@gmail.com to see the verification code</Text>
      <Text style={styles.label}>OTP Code</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (otpInputRefs[index] = ref)}
            style={styles.otpInput}
            value={digit}
            onChangeText={(value) => handleOtpChange(index, value)}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Otp_Verfication
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        alignItems:'center'
      },
      headerText:{
        fontSize:22,
        fontFamily:'Poppins-Bold'
      },
      childText:{
        textAlign:'center',
        width:'100%'
        ,fontFamily:'Poppins-Regular',
        marginVertical:10
      },
      label:{
        textAlign:'left',
        width:"90%",
        fontSize:20,
        fontFamily:'Poppins-Bold'
      },
      otpContainer: {
        flexDirection: 'row',
      },
      otpInput: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 5,
      },
      submitButton: {
        backgroundColor: '#FF6421',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 20,
        width:'90%'
      },
      submitButtonText: {
        color: 'white',
        fontSize: 16,
        textAlign:'center',
        fontFamily:'Poppins-Regular'
      },
});