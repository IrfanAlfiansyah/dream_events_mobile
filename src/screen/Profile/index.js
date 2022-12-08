import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import profileDefault from '../../assets/auth/profile-empty.jpg';

export default function Profile(props) {
  const profile = useSelector(state => state.user.data);

  const handleEdit = () => {
    props.navigation.navigate('Edit Profile');
  };
  const handleChangePw = () => {
    props.navigation.navigate('Change Password');
  };
  return (
    <>
      <ScrollView style={styles.profile}>
        <View style={styles.profileBg}>
          <Image
            source={
              profile.image
                ? {
                    uri: `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${profile.image}`,
                  }
                : profileDefault
            }
            style={styles.photo}
          />
          <Text style={styles.profileName}>
            {profile.username} {profile.name}
          </Text>
          <Text style={styles.profileJob}>
            {profile.profession}
            {', '}
            {profile.nationality}
          </Text>
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
