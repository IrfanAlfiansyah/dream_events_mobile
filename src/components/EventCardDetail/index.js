import React from 'react';
import {View, ScrollView, Text, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import attendees from '../../assets/event/attendees.png';

export default function EventCardDetail(props) {
  return (
    <>
      <ScrollView style={styles.card}>
        <ImageBackground
          source={require('../../assets/event/event.png')}
          style={styles.image}
          resizeMode={'cover'}>
          <View style={styles.rowCard}>
            <Text style={styles.cardTextBold}>{props.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="map-marker"
                size={25}
                color="red"
                style={{
                  marginRight: 10,
                }}
              />
              <Text style={styles.cardText}>{props.location}</Text>
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
              <Text style={styles.cardText}>{props.dateTimeShow}</Text>
            </View>
            <Text style={styles.cardText}>Attendees</Text>
            <Image source={attendees} />
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}
