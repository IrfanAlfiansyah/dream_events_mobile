import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {useSelector, useDispatch} from 'react-redux';
import {incrementCounter, decrementCounter} from '../../stores/action/counter';

export default function Booking(props) {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const checkout = () => {
    props.navigation.navigate('Payment');
  };
  return (
    <>
      <ScrollView style={styles.booking}>
        <View style={styles.seat}>
          <Image source={require('../../assets/event/seat.png')} />
          <View style={styles.ticket}>
            <Text style={styles.ticketText}>Tickets</Text>
            <Text style={styles.sort}>By Price</Text>
            <Icon name="sort" size={35} color="blue" />
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/event/reg.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section REG, Row 1</Text>
              <Text style={styles.sectionLeft}>12 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$15</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
            <TouchableOpacity onPress={() => dispatch(decrementCounter())}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.counter}>{counter.count}</Text>
            <TouchableOpacity onPress={() => dispatch(incrementCounter(1))}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/event/vip.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section VIP, Row 2</Text>
              <Text style={styles.sectionLeft}>9 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$35</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
            <TouchableOpacity onPress={() => dispatch(decrementCounter())}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.counter}>{counter.count}</Text>
            <TouchableOpacity onPress={() => dispatch(incrementCounter(1))}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/event/vvip.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section VVIP, Row 3</Text>
              <Text style={styles.sectionLeft}>6 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$50</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
            <TouchableOpacity onPress={() => dispatch(decrementCounter())}>
              <Icon name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.counter}>{counter.count}</Text>
            <TouchableOpacity onPress={() => dispatch(incrementCounter(1))}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.ticketSection}>Ticket Section</Text>
            <Text style={styles.category}>VIP</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.quantityText}>Quantity</Text>
            <Text style={styles.VIP}>2</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.quantityText}>Total Payment</Text>
            <Text style={styles.VIP}>$70</Text>
          </View>
          <TouchableOpacity style={styles.buttonCheckout} onPress={checkout}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
