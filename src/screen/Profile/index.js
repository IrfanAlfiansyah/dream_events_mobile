import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import DefaultHeader from '../../components/Header/default';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile(props) {
  const handleEdit = () => {
    props.navigation.navigate('Edit Profile');
  };
  const handleChangePw = () => {
    props.navigation.navigate('Change Password');
  };
  return (
    <>
      <DefaultHeader {...props} />
      <ScrollView style={styles.profile}>
        <View style={styles.profileBg}>
          <Image
            source={require('../../assets/auth/profile.jpg')}
            style={styles.photo}
          />
          <Text style={styles.profileName}>Jhon Thomson</Text>
          <Text style={styles.profileJob}>Entrepreneur, ID</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/auth/add.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.atm}>
          <Image source={require('../../assets/auth/atm.png')} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.edit}>
            <Image source={require('../../assets/auth/edit.png')} />
            <TouchableOpacity style={styles.rowEdit} onPress={handleEdit}>
              <Text style={styles.textEdit}>Edit Profile</Text>
              <Icon name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.edit}>
            <Image source={require('../../assets/auth/change.png')} />
            <TouchableOpacity style={styles.rowEdit} onPress={handleChangePw}>
              <Text style={styles.textEdit}>Change Password</Text>
              <Icon name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
