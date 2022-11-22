import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function MyWishlist() {
  return (
    <>
      <ScrollView style={styles.booking}>
        <View style={styles.myBooking}>
          <View>
            <Image source={require('../../assets/auth/search-date.png')} />
            <View style={styles.rowBooking}>
              <View style={styles.heart}>
                <View style={styles.box}>
                  <Text style={styles.boxDate}>15</Text>
                  <Text style={styles.day}>Wed</Text>
                </View>
                <Icon name="heart" size={30} color="blue" />
              </View>
              <View style={styles.descBooking}>
                <Text style={styles.name}>Sights & Sounds Exhibition</Text>
                <Text style={styles.detail}>Jakarta, Indonesia</Text>
                <Text style={styles.detail}>Wed, 15 Nov, 4:00 PM</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.rowBooking}>
              <View style={styles.heart}>
                <View style={styles.box}>
                  <Text style={styles.boxDate}>15</Text>
                  <Text style={styles.day}>Wed</Text>
                </View>
                <Icon name="heart" size={30} color="blue" />
              </View>
              <View style={styles.descBooking}>
                <Text style={styles.name}>Sights & Sounds Exhibition</Text>
                <Text style={styles.detail}>Jakarta, Indonesia</Text>
                <Text style={styles.detail}>Wed, 15 Nov, 4:00 PM</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.rowBooking}>
              <View style={styles.heart}>
                <View style={styles.box}>
                  <Text style={styles.boxDate}>15</Text>
                  <Text style={styles.day}>Wed</Text>
                </View>
                <Icon name="heart" size={30} color="blue" />
              </View>
              <View style={styles.descBooking}>
                <Text style={styles.name}>Sights & Sounds Exhibition</Text>
                <Text style={styles.detail}>Jakarta, Indonesia</Text>
                <Text style={styles.detail}>Wed, 15 Nov, 4:00 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
