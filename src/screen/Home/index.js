import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import HomeHeader from '../../components/Header/home';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import EventCard from '../../components/EventCard';

export default function Home(props) {
  return (
    <>
      <HomeHeader {...props} />
      <ScrollView style={styles.container}>
        <View style={styles.searchBar}>
          <Icon name="search" size={25} color={'white'} />
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Search Event"
          />
        </View>
        <View style={styles.sortDateContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>13</Text>
            <Text style={styles.date}>Mon</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.date}>Tue</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>15</Text>
            <Text style={styles.date}>Wed</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>16</Text>
            <Text style={styles.date}>Thu</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>17</Text>
            <Text style={styles.date}>Fri</Text>
          </View>
        </View>
        <View style={styles.event}>
          <View style={styles.eventView}>
            <Text style={styles.eventText}>Events For You</Text>
            <Icon name="filter" size={25} color={'rgba(51, 102, 255, 1)'} />
          </View>
        </View>
        <EventCard {...props} />
      </ScrollView>
    </>
  );
}
