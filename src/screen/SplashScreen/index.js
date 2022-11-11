import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import splashScreen from '../../assets/auth/splash-screen.png';
import styles from './styles';

export default function SplashScreen(props) {
  console.log(props);
  const token = false;
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
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
