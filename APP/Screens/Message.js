import { View, Text,StyleSheet,TouchableOpacity,FlatList,Image} from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { Searchbar } from 'react-native-paper';
import Icon2 from 'react-native-vector-icons/EvilIcons';
const Message = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    filterData(query);
  };

  const filterData = (query) => {
    const filtered = data.filter(
      (item) =>
        item.name &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const data = [
    {
      id: 1,
      image: require('../assets/p1.png'),
      name: 'Amed anjims',
      recentMessage: 'Hi, John! 👋 How are you doing?',
    },
    {
      id: 2,
      image: require('../assets/p2.png'),
      name: 'Jane Smith',
      recentMessage: 'I will be there in 5 minutes.',
    },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>{navigation.navigate('User Chat')}}>
    <View style={styles.itemContainer}>
      <View style={styles.userImageContainer}>
        <Image source={item.image} style={styles.userImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.recentMessage} numberOfLines={1}>{item.recentMessage}</Text>
      </View>
      <View style={styles.messageInfoContainer}>
        <Icon name='check' size={14} color='grey' />
        <Text style={styles.messageTime}>10:30 AM</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.middleHeading}>
        <Text style={styles.middleText1}>Messages</Text>
        <TouchableOpacity>
          <Icon name='new-message' size={20}style={styles.msgIcon}/>
        </TouchableOpacity>
      </View>
      <Searchbar
        placeholder="Search for chats & messages"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBox}
        icon={() => <Icon2 name="search" size={30} color="grey" />}
        clearIcon={searchQuery.length > 0 ? () => (
          <Icon2
            name="close-o"
            size={20}
            color="grey"
            onPress={() => {
              setSearchQuery(''); 
              filterData('');
            }}
          />
        ) : undefined}

      />
      <View style={{marginTop:10}}>
        <FlatList
          data={searchQuery ? filteredData : data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        style={{ height: '100%' }}
      />
      </View>
    </View>
  )
}

export default Message
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  middleHeading: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  middleText1: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    width: '80%',
  },
 msgIcon:{
  marginHorizontal:10
 },
 searchBox: {
  backgroundColor: '#ffffff',
  borderRadius: 10,
  width: '100%',
  marginTop: 20
},
itemContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#ccc',
  width: '100%',
  flex:1,
  
},
userImageContainer: {
  width: 80,
  alignItems: 'center',
  justifyContent: 'center',
},
userImage: {
  width: 60,
  height: 65,
  borderRadius: 25,
},
userName: {
  fontSize: 18,
fontFamily:'Poppins-Bold'
},
flatListContent: {
  paddingBottom: 20,
},
recentMessage: {
  fontSize: 14,
  color: '#888',
  marginTop: 2,
  fontFamily:'Poppins-Regular'
},
messageInfoContainer: {
  position: 'absolute',
  flexDirection: 'row',
  alignItems: 'center',
  right: 10,
  bottom: 0,
},
messageTime: {
  fontSize: 12,
  color: 'grey',
  marginLeft: 4,
},


});