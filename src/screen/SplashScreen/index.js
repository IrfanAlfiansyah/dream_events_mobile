import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import splashScreen from '../../assets/auth/splash-screen.png';
import styles from './styles';

export default function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 2000);
  };

  return (
    <View style={styles.splash}>
      <Image style={styles.imageJumbotron} source={splashScreen} />
    </View>
  );
}

const style = StyleSheet.create({});
