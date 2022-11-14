import React from 'react';
import {View, ScrollView, Text, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import attendees from '../../assets/event/attendees.png';

export default function EventCardDetail() {
  return (
    <>
      <ScrollView style={styles.card}>
        <ImageBackground
          source={require('../../assets/event/event.png')}
          style={styles.image}
          resizeMode={'cover'}>
          <View style={styles.rowCard}>
            <Text style={styles.cardTextBold}>Sights & Sounds Exhibition</Text>
            <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" size={25} />
              <Text style={styles.cardText}>Jakarta, Indonesia</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="map-marker" size={25} />
              <Text style={styles.cardText}>Wed, 15 Nov, 4:00 PM</Text>
            </View>
            <Text style={styles.cardText}>Attendees</Text>
            <Image source={attendees} />
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}
