import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import google from '../../assets/auth/google.png';
import facebook from '../../assets/auth/fb.png';
import finger from '../../assets/auth/finger.png';
import logo from '../../assets/auth/logo.png';

export default function Login(props) {
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  const navFinger = () => {
    props.navigation.navigate('Touch-Login');
  };
  const navForgot = () => {
    props.navigation.navigate('Forgot');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width: '50%', margin: 10}} />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: 'black',
          paddingHorizontal: 10,
        }}>
        Login
      </Text>
      <Text style={styles.textTop}>Hi, Welcome back to Urticket! </Text>
      <View style={styles.inputContainer}>P
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
      </View>
      <TouchableOpacity style={styles.buttonForgot} onPress={navForgot}>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Login
        </Text>
      </TouchableOpacity>
      <View style={styles.rowRegister}>
        <Text style={{color: 'black', fontSize: 16}}>
          Don't you have any account?
        </Text>
        <TouchableOpacity style={styles.buttonRegister} onPress={navSignup}>
          <Text style={styles.signup}>Signup</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.alternativeLogin}>or sign in with</Text>
      </View>
      <View style={styles.rowImage}>
        <View style={styles.iconBox}>
          <Image style={styles.icon} source={google} />
        </View>
        <View style={styles.iconBox}>
          <Image style={styles.icon} source={facebook} />
        </View>
        <View style={styles.iconBox}>
          <TouchableOpacity onPress={navFinger}>
            <Image style={styles.icon} source={finger} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
