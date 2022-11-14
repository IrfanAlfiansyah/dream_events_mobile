import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import HeaderDetail from '../../components/Header/detail';
import EventCardDetail from '../../components/EventCardDetail';
import styles from './styles';

export default function Detail(props) {
  const navBooking = () => props.navigation.navigate('Booking');
  return (
    <>
      <HeaderDetail {...props} />
      <ScrollView>
        <EventCardDetail {...props} />
        <View style={styles.detailCard}>
          <Text style={styles.eventDetailTitle}>Event Detail</Text>
          <Text style={styles.eventDetail}>
            After his controversial art exhibition "Tear and Consume" back in
            November 2018, in which guests were invited to tear up…
          </Text>
          <Text style={styles.location}>Location</Text>
          <ImageBackground
            source={require('../../assets/event/map.png')}
            style={styles.image}
            resizeMode={'cover'}>
            <TouchableOpacity onPress={navBooking} style={styles.button}>
              <Text style={styles.buy}>Buy Ticket</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
}
