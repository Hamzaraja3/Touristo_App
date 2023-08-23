import { View, Text,TouchableOpacity,StyleSheet,TextInput, } from 'react-native'
import React,{useState} from 'react'

const ForgotPassword = () => {
    const [Email, setEmail] = useState('');
  return (
    <View style={styles.container}>
            <Text style={styles.mainText}>Forgot password</Text>
            <Text style={styles.childText}>Enter your email account to reset  your password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#555"
                    value={Email}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>
            <TouchableOpacity style={styles.btn}><Text style={styles.loginbtn} onPress={()=>navigation.navigate('Dashboard')}>Reset Password</Text></TouchableOpacity>
    </View>
  )
}

export default ForgotPassword
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    mainText: {
        fontWeight: '700',
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 20,
    },
    childText: {
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
    },
    btn: {
        width: '100%',
       height:50,
        backgroundColor: '#FF6421',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    loginbtn: {
        textAlign: 'center',
        color:'white'
    },
});