import React, {useState} from 'react';
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
import axios from '../../utils/axios';
import logo from '../../assets/auth/logo.png';
import {Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

export default function Signup(props) {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);

  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleRegister = async () => {
    try {
      if (form.email === '' || form.password === '' || form.username === '') {
        alert('Your form cannot be empty');
      } else {
        setIsLoading(true);
        const result = await axios.post('auth/register', form);
        alert(result.data.message);
        props.navigation.navigate('Login');
      }
    } catch (error) {
      setIsLoading(false);
      alert(error.response.data.message);
    }
  };

  const navLogin = () => {
    props.navigation.navigate('Login');
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={logo}
        style={{width: 140, height: 35, margin: 10, borderRadius: 5}}
      />
      <Text style={styles.textBar}>Sign Up</Text>
      <View style={styles.rowRegister}>
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: 'Merienda-Regular',
          }}>
          Already have an account?
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
            onChangeText={text => handleChangeForm(text, 'username')}
          />
        </View>
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
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxText}>Accept terms and condition</Text>
      </View>
      <TouchableOpacity
        style={styles.buttonLogin}
        activeOpacity={0.9}
        onPress={handleRegister}>
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text
            style={{
              color: 'white',
              fontFamily: 'Merienda-ExtraBold',
              fontSize: 16,
            }}>
            Sign Up
          </Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
