import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,FlatList,Image} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
const Calendar = () => {
  const [startDate, setStartDate] = useState(moment());
  const currentMonthYear = startDate.format('MMMM YYYY');
  const data = [
    {
      id: 1,
      image: require('../assets/R1.png'),
      name: 'Hisma Desert',
      calender: '23 January 2023',
      location: 'Zeero Point, Sylhet',
    },
    {
      id: 2,
      image: require('../assets/R2.png'),
      name: 'Hisma Desert',
      calender: '23 January 2023',
      location: 'Zeero Point, Sylhet',
    },
    {
      id: 3,
      image: require('../assets/R3.png'),
      name: 'The HSB Vortex',
      calender: '23 January 2023',
      location: 'Zeero Point, Sylhet',
    },
  ]
  const handleNext = () => {
    setStartDate(startDate.clone().add(1, 'week'));
  };

  const handlePrevious = () => {
    setStartDate(startDate.clone().subtract(1, 'week'));
  };

  const renderWeekDays = () => {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = startDate.clone().add(i, 'days');
      const isCurrentDay = day.isSame(moment(), 'day');
      weekDays.push(
        <View
          key={i}
          style={[styles.dayContainer, isCurrentDay && styles.currentDayContainer]}
        >
          <Text style={[styles.dayText, isCurrentDay && styles.currentDayText]}>
            {day.format('ddd')}
          </Text>
          <Text style={[styles.dateText, isCurrentDay && styles.currentDateText]}>
            {day.format('D')}
          </Text>
        </View>
      );
    }
    return weekDays;
  };
  const Item = ({ item }) => {
    return(
  <View style={styles.itemContainer}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} resizeMode='stretch' />
    </View>
    <View style={styles.dataContainer}>
    <View style={{ flexDirection: 'row' }}>
        <Icon name='calendar-month' size={18} />
        <Text style={styles.itemcalender}>{item.calender}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <View style={styles.locationContainer}>
        <Icon1 name='location' size={24} color="#7D848D" />
        <Text style={styles.itemLocation}>{item.location}</Text>
      </View>
      <View>
      </View>
    </View>
  </View>
    )}
  return (
    <View style={styles.container}>
      <View style={styles.CalendarContainer}>
        <View style={styles.header}>
          <Text style={styles.monthText}>{currentMonthYear}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={handlePrevious}>
              <Icon2 name='step-backward' size={18} style={styles.iconBack} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
              <Icon name='skip-next' size={28} style={styles.iconNext} />
            </TouchableOpacity></View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.weekDaysContainer}>{renderWeekDays()}</View>
        </ScrollView>
      </View>
      <View style={styles.middleHeading}>
        <Text style={styles.middleText1}>My Schedule</Text>
        <TouchableOpacity>
          <Text style={styles.middleText2}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  CalendarContainer: {
    width: '98%',
    height: 130,
    backgroundColor: '#FFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '50%'
  },
  monthText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    height: 60,

  },
  dayContainer: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: '#f5f5f5'
  },
  currentDayContainer: {
    backgroundColor: '#FF6421',
  },
  dayText: {
    fontSize: 16,
  },
  currentDayText: {
    color: 'white',
  },
  dateText: {
    fontSize: 20,
  },
  currentDateText: {
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'flex-end'
  }, iconBack: {
    padding: 4,
    marginHorizontal: 6
  },
  iconNext: {
    marginHorizontal: 6
  },
  middleHeading: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  middleText1: {

    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'left',
    width: '80%',
  },
  middleText2: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#FF6421',
  },
  itemContainer: {
    width: '98%',
    height: 130,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 130,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  
  },
  dataContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
  fontFamily:'Poppins-Bold',
    marginBottom: 6,
    width:'70%'
  },
  itemcalender: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
    fontFamily:'Poppins-Regular'
  },
  itemLocation: {
    fontSize: 13,
    color: '#888',
    fontFamily: 'Poppins-Regular',
    width: "90%"
},
locationContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-start',
},
});

export default Calendar;
