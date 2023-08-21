import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Touristo</Text>
        </View>
    )
}

export default Splash
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#FF6421'
    },
    mainText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 34,
        color: 'white',
        fontFamily:'Poppins-Regular'
    }
});