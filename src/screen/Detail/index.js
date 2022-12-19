import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import HeaderDetail from '../../components/Header/detail';
import attendees from '../../assets/event/attendees.png';
import axios from '../../utils/axios';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {order} from '../../stores/actions/order.js';

export default function Detail(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const eventId = props.route.params.eventId;
  console.log(eventId);

  useEffect(() => {
    getData();
  }, [image]);

  const getData = async () => {
    try {
      const result = await axios.get(`/event/${eventId}`);
      console.log(result.data.msg);
      setData(result.data.data);
      setImage(result.data.data[0]?.image);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleOrder = async () => {
  //   try {
  //     const body = {
  //       eventId: eventId,
  //       price: data[0]?.price,
  //     };
  //     await dispatch(order(body));
  //     props.navigation.replace('Booking', {
  //       eventId: eventId,
  //       price: data[0]?.price,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleOrder = () => {
    props.navigation.navigate('Order');
  };

  return (
    <>
      <HeaderDetail {...props} />
      <ScrollView>
        <ScrollView style={styles.card}>
          <ImageBackground
            source={{
              uri: `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${data[0]?.image}`,
            }}
            resizeMode={'cover'}>
            <View style={styles.rowCard}>
              <Text style={styles.cardTextBold}>{data[0]?.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="map-marker"
                  size={25}
                  color="red"
                  style={{
                    marginRight: 10,
                  }}
                />
                <Text style={styles.cardText}>{data[0]?.location}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="clock-o"
                  size={20}
                  color="red"
                  style={{
                    marginRight: 10,
                  }}
                />
                <Text style={styles.cardText}>
                  {moment(data[0]?.dateTimeShow).format('ddd MMM Do , h:mm a')}
                </Text>
              </View>
              <Text style={styles.cardText}>Attendees</Text>
              <Image source={attendees} style={styles.attendees} />
            </View>
          </ImageBackground>
        </ScrollView>
        <View style={styles.detailCard}>
          <Text style={styles.eventDetailTitle}>Event Detail</Text>
          <Text style={styles.eventDetail}>{data[0]?.detail}</Text>
          <Text style={styles.location}>{data[0]?.location}</Text>
          <ImageBackground
            source={require('../../assets/event/map.png')}
            style={styles.image}
            resizeMode={'cover'}>
            <TouchableOpacity onPress={handleOrder} style={styles.button}>
              <Text style={styles.buy}>Buy Ticket</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}
