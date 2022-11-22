import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function MyBooking() {
  return (
    <>
      <ScrollView style={styles.booking}>
        <View style={styles.myBooking}>
          <View>
            <Image source={require('../../assets/auth/search-date.png')} />
            <View style={styles.rowBooking}>
              <View style={styles.box}>
                <Text style={styles.boxDate}>15</Text>
                <Text style={styles.day}>Wed</Text>
              </View>
              <View style={styles.descBooking}>
                <Text style={styles.name}>Sights & Sounds Exhibition</Text>
                <Text style={styles.detail}>Jakarta, Indonesia</Text>
                <Text style={styles.detail}>Wed, 15 Nov, 4:00 PM</Text>
                <TouchableOpacity>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.rowBooking}>
              <View style={styles.box}>
                <Text style={styles.boxDate}>15</Text>
                <Text style={styles.day}>Wed</Text>
              </View>
              <View style={styles.descBooking}>
                <Text style={styles.name}>Sights & Sounds Exhibition</Text>
                <Text style={styles.detail}>Jakarta, Indonesia</Text>
                <Text style={styles.detail}>Wed, 15 Nov, 4:00 PM</Text>
                <TouchableOpacity>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.rowBooking}>
              <View style={styles.box}>
                <Text style={styles.boxDate}>15</Text>
                <Text style={styles.day}>Wed</Text>
              </View>
              <View style={styles.descBooking}>
                <Text style={styles.name}>Sights & Sounds Exhibition</Text>
                <Text style={styles.detail}>Jakarta, Indonesia</Text>
                <Text style={styles.detail}>Wed, 15 Nov, 4:00 PM</Text>
                <TouchableOpacity>
                  <Text style={styles.detailText}>Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
