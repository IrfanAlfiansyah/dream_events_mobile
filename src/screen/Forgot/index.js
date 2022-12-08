import React, {useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import logo from '../../assets/auth/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Forgot(props) {
  // const [form, setForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleForgot = () => {
    props.navigation.navigate('ResetPassword');
  };

  // const handleForgot = async () => {
  //   try {
  //     setIsLoading(true);
  //     const result = await axios.post('auth/forgotPassword', form);
  //     alert(result.data.message);
  //     props.navigation.navigate('ResetPassword');
  //   } catch (error) {
  //     setIsLoading(false);
  //     alert(error.response.data.message);
  //   }
  // };

  // const handleChangeForm = (value, name) => {
  //   setForm({...form, [name]: value});
  // };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={logo}
        style={{width: 140, height: 35, margin: 10, borderRadius: 5}}
      />
      <Text style={styles.textBar}>Forgot Password</Text>
      <Text style={styles.textTop}>You'll get mail soon on your email </Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            // onChangeText={text => handleChangeForm(text, 'email')}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.9}
        onPress={handleForgot}>
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text
            style={{
              color: 'white',
              fontFamily: 'Merienda-ExtraBold',
              fontSize: 16,
            }}>
            Send
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
