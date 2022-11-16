import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import axios from '../../utils/axios';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import profileEmpty from '../../assets/auth/profile-empty.jpg';

import Icon from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerContent(props) {
  const profile = useSelector(state => state.user.data);
  console.log(profile.image);

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      await axios.post('auth/logout');
      alert('Success Logout');
      props.navigation.replace('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <View
            style={styles.avatar}
            source={
              profile.image !== null
                ? {
                    uri: `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${profile.image}`,
                  }
                : profileEmpty
            }
          />
          <View style={styles.biodata}>
            <Text style={styles.title}>{profile.username}</Text>
            <Text style={styles.caption}>{profile.email}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    // marginTop: 100,
    // left: 100,
    borderColor: 'blue',
    borderWidth: 2,
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontFamily: 'Merienda-ExtraBold',
    color: 'black',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: 'Merienda-Bold',
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
