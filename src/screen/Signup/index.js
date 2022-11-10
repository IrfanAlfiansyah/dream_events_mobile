import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import logo from '../../assets/auth/logo.png';

export default function Signup(props) {
  const handleRegister = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navLogin = () => {
    props.navigation.navigate('Login');
  };
  // const isAllFormFilled = Object.keys(form).every((e) => form[e]);

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
        Signup
      </Text>
      <View style={styles.rowRegister}>
        <Text style={{color: 'black', fontSize: 16}}>
          Don't you have any account?
        </Text>
        <TouchableOpacity style={styles.buttonRegister} onPress={navLogin}>
          <Text style={styles.signup}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Username"
          />
        </View>
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
      <TouchableOpacity style={styles.buttonLogin} onPress={handleRegister}>
        {/* disabled={!isAllFormFilled}> */}
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
}
