import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import google from '../../assets/auth/google.png';
import facebook from '../../assets/auth/fb.png';
import finger from '../../assets/auth/finger.png';
import logo from '../../assets/auth/logo.png';
import {ScrollView} from 'react-native-gesture-handler';

export default function Login(props) {
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  const navForgot = () => {
    props.navigation.navigate('Forgot');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: '50%', margin: 10}} />
      <Text style={styles.textBar}>Login</Text>
      <Text style={styles.textTop}>Hi, Welcome back to Urticket! </Text>
      <ScrollView style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Email"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Password"
          />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonForgot} onPress={navForgot}>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Merienda-ExtraBold',
            fontSize: 16,
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <View style={styles.rowRegister}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Merienda-Bold',
            fontSize: 14,
          }}>
          Don't have any account?
        </Text>
        <TouchableOpacity style={styles.buttonRegister} onPress={navSignup}>
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.alternativeLogin}>or login with</Text>
      </View>
      <View style={styles.rowImage}>
        <View style={styles.iconBox}>
          <Image style={styles.icon} source={google} />
        </View>
        <View style={styles.iconBox}>
          <Image style={styles.icon} source={facebook} />
        </View>
        <View style={styles.iconBox}>
          <Image style={styles.icon} source={finger} />
        </View>
      </View>
    </View>
  );
}
