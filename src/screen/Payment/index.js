import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import DefaultHeader from '../../components/Header/default';
import {RadioButton} from 'react-native-paper';
import styles from './styles';

export default function Payment(props) {
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);
  const [checked4, setChecked4] = React.useState(false);
  return (
    <>
      <DefaultHeader {...props} />
      <ScrollView style={styles.payment}>
        <View style={styles.paymentSection}>
          <Text style={styles.paymentText}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Image
              source={require('../../assets/event/card.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>Card</Text>
          </View>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked2 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked2(!checked2);
              }}
            />
            <Image
              source={require('../../assets/event/bank.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>Bank Transfer</Text>
          </View>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked3 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked3(!checked3);
              }}
            />
            <Image
              source={require('../../assets/event/retail.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>Retail</Text>
          </View>
          <View style={styles.paymentMethod}>
            <RadioButton
              value="first"
              status={checked4 ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked4(!checked4);
              }}
            />
            <Image
              source={require('../../assets/event/e-money.png')}
              style={styles.paymentImage}
            />
            <Text style={styles.paymentMethodText}>E - Money</Text>
          </View>
          <View style={styles.rowPayment}>
            <Text style={styles.total}>Total Payment</Text>
            <Text style={styles.price}>$70</Text>
          </View>
          <TouchableOpacity style={styles.buttonPayment}>
            <Text style={styles.button}>Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
