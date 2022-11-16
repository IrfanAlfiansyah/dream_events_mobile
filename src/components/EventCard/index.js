import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EventCard(props) {
  const navDetail = () => props.navigation.navigate('Detail');
  // const handleDetail = item => {
  //   props.navigation.navigate('Detail', {id: item.id});
  // };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // getUserId();
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const result = await axios.get(
  //       'event?name=&sort=&limit=5&page=1&searchDate=',
  //     );
  //     setData(result.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getUserId = async () => {
  //   const data = await AsyncStorage.getItem('userId');
  //   getUserId(data);
  // };

  return (
    <>
      <ScrollView style={styles.card}>
        <Image
          source={require('../../assets/event/event.png')}
          style={styles.image}
        />
        <View style={styles.rowCard}>
          <Text style={styles.cardText}>Wed, 15 Nov, 4:00 PM</Text>
          <Text style={styles.cardTextBold}>Sights & Sounds Exhibition</Text>
          <TouchableOpacity onPress={navDetail}>
            <Icon
              name="arrow-circle-right"
              size={35}
              color={'rgba(252, 16, 85, 1)'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
