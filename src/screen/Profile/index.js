import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import DefaultHeader from '../../components/Header/default';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile(props) {
  return (
    <>
      <DefaultHeader {...props} />
      <ScrollView style={styles.profile}>
        <View style={styles.profileBg}>
          <Image source={require('../../assets/auth/avatar.png')} />
          <Text style={styles.profileName}>Jhon Thomson</Text>
          <Text style={styles.profileJob}>Entrepreneur, ID</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card</Text>
          <Image source={require('../../assets/auth/add.png')} />
        </View>
        <View style={styles.atm}>
          <Image source={require('../../assets/auth/atm.png')} />
        </View>
        <View style={styles.edit}>
          <Image source={require('../../assets/auth/edit.png')} />
          <Text style={styles.textEdit}>Edit Profile</Text>
          <Icon name="chevron-right" size={25} style={styles.icon} />
        </View>
        <View style={styles.edit}>
          <Image source={require('../../assets/auth/change.png')} />
          <Text style={styles.textEdit}>Change Password</Text>
          <Icon name="chevron-right" size={25} style={styles.iconChange} />
        </View>
      </ScrollView>
    </>
  );
}
