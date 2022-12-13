import React, {useState, useEffect} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import HomeHeader from '../../components/Header/home';
import styles from './styles';
import EventCard from '../../components/EventCard';
import moment from 'moment';
import axios from '../../utils/axios';

export default function Home(props) {
  const [data, setData] = useState([]);
  const [dateShow, setDateShow] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const [listDateShow, setListDateShow] = useState([]);

  useEffect(() => {
    getData();
    generateDate();
  }, [dateShow]);

  const getData = async () => {
    try {
      const result = await axios.get(
        'event?name=&sort=&limit=10&page=1&searchDate=',
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, 'days'),
      moment(dateShow).subtract(1, 'days'),
      dateShow,
      moment(dateShow).subtract(-1, 'days'),
      moment(dateShow).subtract(-2, 'days'),
    ];
    setListDateShow(listDate);
  };

  const handleDetail = eventId => {
    props.navigation.navigate('Detail', {eventId: eventId});
  };

  const selectDate = date => {
    setDateShow(date);
  };

  const navSeeAll = () => props.navigation.navigate('All Event');
  return (
    <>
      <HomeHeader {...props} />
      <ScrollView style={styles.container}>
        <View style={styles.sortDateContainer}>
          {listDateShow.map((item, index) => (
            <TouchableOpacity
              style={index === 2 ? styles.active : styles.notActive}
              key={index}
              onPress={() => {
                selectDate(moment(item).format('YYYY-MM-DD'));
              }}>
              <View>
                <Text style={styles.date}>{moment(item).format('DD')}</Text>
                <Text style={styles.date}>{moment(item).format('ddd')}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.event}>
          <View style={styles.eventView}>
            <Text style={styles.eventText}>Events For You</Text>
            <Image source={require('../../assets/auth/filter.png')} />
          </View>
        </View>
        <View>
          <EventCard data={data} handleDetail={handleDetail} />
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.button} onPress={navSeeAll}>
            <Text style={styles.buttonText}>See All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
