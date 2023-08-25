import { View, Text,StyleSheet,Image, TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
const Edit_Profile = () => {
    const[name,setname]=useState('');
    const[lastname,setlastname]=useState('');
    const[location,setlocation]=useState('');
    const[phone,setphone]=useState('');
    const [selectedCode, setSelectedCode] = useState(null);

    const countryCodes = [
      { label: '+1 (United States)', value: '1' },
      { label: '+44 (United Kingdom)', value: '44' },
      { label: '+91 (India)', value: '91' },
      // Add more country codes here
    ];
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Image
          source={require('../assets/profile2.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Imane fh</Text>
        <TouchableOpacity><Text style={styles.changeProfile}>Change Profile Picture</Text></TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor="#555"
                    value={name}
                    onChangeText={(value) => setname(value)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor="#555"
                    value={lastname}
                    onChangeText={(value) => setlastname(value)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    placeholderTextColor="#555"
                    value={location}
                    onChangeText={(value) => setlocation(value)}
                />
            </View>
            <View style={styles.inputContainer2}>
            <DropDownPicker
           items={countryCodes}
           defaultValue={selectedCode}
          containerStyle={styles.countryCodePicker}
          style={styles.countryCodePickerStyle}
          itemStyle={styles.countryCodeItemStyle}
          onChangeItem={(item) => setSelectedCode(item.value)}
          placeholder="+"
          placeholderStyle={styles.placeholderStyle}
        />
                <TextInput
                    style={styles.input2}
                    placeholder="Mobile Number"
                    placeholderTextColor="#555"
                    value={phone}
                    onChangeText={(value) => setphone(value)}
                    keyboardType="phone-pad"
                />
            </View>
    </View>
  )
}

export default Edit_Profile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
      },
      header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      username: {
        marginTop: 10,
        fontSize: 20,
        fontFamily:'Poppins-Bold'
      },
      changeProfile: {
        color: '#888',
        marginTop: 5,
        fontFamily:'Poppins-Regular',
        color:'#FF6421'
      },
      inputContainer: {
        width: '90%',
        marginBottom: 20,
        marginHorizontal:20,
        marginVertical:10
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
    },
    countryCodePicker: {
        flex: 1,
      },
      countryCodePickerStyle: {
        backgroundColor: '#DDDDDD',
        borderWidth: 0,
        borderRadius: 5,
      },
      countryCodeItemStyle: {
        justifyContent: 'flex-start',
      },
      placeholderStyle: {
        color: '#555',
      },
      inputContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
        marginHorizontal: 20,
        marginVertical: 10,
      },
      input2: {
        flex: 2,
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#DDDDDD',
      },
});