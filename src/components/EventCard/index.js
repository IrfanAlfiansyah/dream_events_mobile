import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './styles';
import defaultImage from '../../assets/event/event.png';
import moment from 'moment';

export default function EventCard(props) {
  return (
    <FlatList
      style={styles.card}
      horizontal={true}
      data={props.data}
      renderItem={({item}) => (
        <View style={styles.card}>
          <Image
            source={
              item.image
                ? {
                    uri: `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${item.image}`,
                  }
                : defaultImage
            }
            style={styles.image}
          />
          <View style={styles.rowCard}>
            <Text style={styles.cardTextBold}>{item.name}</Text>
            <Text style={styles.cardText}>
              {moment(item.dateTimeShow).format('ddd MMM Do , h:mm a')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.handleDetail(item.eventId);
              }}>
              <Icon
                name="arrow-circle-right"
                size={35}
                color={'rgba(252, 16, 85, 1)'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      keyExtractor={item => item.eventId}
    />
  );
}
