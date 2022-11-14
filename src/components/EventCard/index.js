import React from 'react';
import {View, ScrollView, Text, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';

export default function EventCard(props) {
  const navDetail = () => props.navigation.navigate('Detail');

  return (
    <>
      <ScrollView style={styles.card}>
        <ImageBackground
          source={require('../../assets/event/event.png')}
          style={styles.image}
          resizeMode={'cover'}>
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
        </ImageBackground>
      </ScrollView>
    </>
  );
}
