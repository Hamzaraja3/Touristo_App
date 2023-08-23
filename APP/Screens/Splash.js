import { View, Text, StyleSheet } from 'react-native'
import React,{useEffect,useState} from 'react'
import Onboarding1 from './Onboarding1'
const Splash = () => {
    const [isComplete, setIsComplete] = useState(false)
    useEffect(()=>{
        setTimeout(() => {setIsComplete(true)},3000)
    },[])
    return (
        isComplete?
        <Onboarding1/>
        :
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