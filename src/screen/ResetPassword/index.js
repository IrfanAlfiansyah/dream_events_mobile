import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import logo from '../../assets/auth/logo.png';

export default function ResetPassword(props) {
  const handleUpdate= () => {
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
        Reset Password
      </Text>
      <Text style={styles.textTop}>You'll get your account back! </Text>
      <View style={styles.inputContainer}>
        <View>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="OTP"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="New Password"
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Confirm New Password"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleUpdate}>
        {/* disabled={!isAllFormFilled}> */}
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
}
