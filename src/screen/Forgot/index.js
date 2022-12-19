import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import logo from '../../assets/auth/logo.png';
import Notification from '../../utils/notif';
import {useDispatch} from 'react-redux';
import {forgotPwd} from '../../stores/action/user';

export default function Forgot(props) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleNotification = () => {
    console.log('Click Me!');
    Notification.showNotification();
  };

  const handleNotificationSchedule = () => {
    console.log('Click Me!');
    const setSchedule = {
      title: 'Time for lunch',
      message: 'Dont forget your meal',
      date: new Date(Date.now() + 5 * 1000),
    };
    Notification.scheduleProductNotification(setSchedule);
  };

  const handleForgot = async () => {
    try {
      setIsLoading(true);
      const result = await dispatch(forgotPwd(form));
      ToastAndroid.show(result.action.payload.data.message, ToastAndroid.LONG);
      props.navigation.navigate('ResetPassword');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
    }
  };

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={logo} style={styles.logo} />
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
            onChangeText={text => handleChangeForm(text, 'email')}
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
          <Text style={styles.button}>Send</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleNotification}>
        <Text style={styles.button}>Notif</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleNotificationSchedule}>
        <Text style={styles.button}>Schedule Notif</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
