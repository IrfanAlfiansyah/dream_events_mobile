import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import logo from '../../assets/auth/logo.png';

export default function Forgot(props) {
  const handleForgot = () => {
    props.navigation.navigate('ResetPassword');
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
        Forgot Password
      </Text>
      <Text style={styles.textTop}>You'll get mail soon on your email </Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Email"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleForgot}>
        {/* disabled={!isAllFormFilled}> */}
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Send
        </Text>
      </TouchableOpacity>
    </View>
  );
}
