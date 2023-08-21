import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Signin = () => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Sign in now</Text>
            <Text style={styles.childText}>Please sign in to continue our app</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#555"
                    value={Email}
                    onChangeText={(value) => setEmail(value)}
                />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.passwordInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#555"
                        secureTextEntry={!showPassword}
                        value={Password}
                        onChangeText={(value) => setPassword(value)}
                    />
                    <TouchableOpacity style={styles.iconContainer} onPress={togglePasswordVisibility}>
                        <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity><Text style={styles.forgot}>Forgot Password?</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn}><Text style={styles.loginbtn} onPress={()=>navigation.navigate('Dashboard')}>Sign In</Text></TouchableOpacity>
                <View style={{ flexDirection: 'row', width: '100%',marginVertical:20 }}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <TouchableOpacity style={styles.signUpText}><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
                </View>
            </View>
            <View></View>
        </View>
    );
};

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
        marginBottom: 10,
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
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
    },
    iconContainer: {
        right: 38
    },
    forgot: {
        textAlign: 'right',
        width: '100%',
        marginVertical:15,
        color:'#FF6421'
    },
    btn: {
        width: '100%',
        height: '17%',
        backgroundColor: '#FF6421',
        alignSelf: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    loginbtn: {
        textAlign: 'center',
        color:'white'
    },
    text: {
        textAlign: 'right',
        width: '70%'
    },
    signUpText: {
        color: '#FF6421',
        width: '40%',
        textAlign:'left'

    },
});

export default Signin;
