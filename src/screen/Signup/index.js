import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import logo from '../../assets/auth/logo.png';
import {Checkbox} from 'react-native-paper';

export default function Signup(props) {
  const [checked, setChecked] = React.useState(false);
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
      <Text style={styles.textBar}>Signup</Text>
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
      <ScrollView style={styles.inputContainer}>
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
      </ScrollView>
      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={styles.checkboxText}>Accept terms and condition</Text>
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleRegister}>
        {/* disabled={!isAllFormFilled}> */}
        <Text
          style={{
            color: 'white',
            fontFamily: 'Merienda-ExtraBold',
            fontSize: 16,
          }}>
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
}
