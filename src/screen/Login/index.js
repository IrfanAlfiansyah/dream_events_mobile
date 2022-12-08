import React, {useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import google from '../../assets/auth/google.png';
import facebook from '../../assets/auth/fb.png';
import finger from '../../assets/auth/finger.png';
import logo from '../../assets/auth/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';
import {getUserById} from '../../stores/action/user';
import {useDispatch} from 'react-redux';

export default function Login(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async () => {
    try {
      if (form.email === '' || form.password === '') {
        alert('Please input your email/password');
      } else {
        setIsLoading(true);
        const result = await axios.post('auth/login', form);
        await AsyncStorage.setItem('token', result.data.data.token);
        await AsyncStorage.setItem(
          'refreshToken',
          result.data.data.refreshToken,
        );
        await dispatch(getUserById(result.data.data.userId));
        alert(result.data.message);
        props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
      }
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.message);
    }
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  const navForgot = () => {
    props.navigation.navigate('Forgot');
  };

  const handleNotification = () => {
    console.log('Click Me!');
  };

  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{width: 140, height: 35, margin: 10, borderRadius: 5}}
      />
      <Text style={styles.textBar}>Login</Text>
      <Text style={styles.textTop}>Hi, Welcome back to Urticket! </Text>
      <ScrollView style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={text => handleChangeForm(text, 'email')}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={isPwdShown ? false : true}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={text => handleChangeForm(text, 'password')}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              height: '100%',
              paddingHorizontal: 12,
              justifyContent: 'center',
            }}
            onPress={() => setIsPwdShown(!isPwdShown)}>
            {isPwdShown ? (
              <Icon name="eye-off" size={18} />
            ) : (
              <Icon name="eye" size={18} />
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonForgot} onPress={navForgot}>
        <Text style={styles.forgotText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.9}
        onPress={handleLogin}>
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text
            style={{
              color: 'white',
              fontFamily: 'Merienda-ExtraBold',
              fontSize: 16,
            }}>
            Login
          </Text>
        )}
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
