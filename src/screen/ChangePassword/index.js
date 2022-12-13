import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {updatePwd} from '../../stores/action/user';
import {useDispatch} from 'react-redux';

export default function ChangePassword() {
  const dispatch = useDispatch();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown2, setIsPwdShown2] = useState(false);
  const [isPwdShown3, setIsPwdShown3] = useState(false);
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleUpdatePassword = async () => {
    try {
      // const id = profile.id;
      const result = await dispatch(updatePwd(form));
      ToastAndroid.show(result.action.payload.data.msg, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
      ToastAndroid.show(error.response.data.msg, ToastAndroid.SHORT);
    }
  };

  return (
    <>
      <ScrollView style={styles.password}>
        <View style={styles.changePw}>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Old Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={isPwdShown ? false : true}
              placeholderTextColor={'rgba(160, 163, 189, 1)'}
              placeholder="Input Old Password"
              autoCapitalize="none"
              onChangeText={text => handleChangeForm(text, 'oldPassword')}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
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
          <View style={styles.textEdit}>
            <Text style={styles.label}>New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={isPwdShown2 ? false : true}
              placeholderTextColor={'rgba(160, 163, 189, 1)'}
              placeholder="Input New Password"
              autoCapitalize="none"
              onChangeText={text => handleChangeForm(text, 'newPassword')}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
                height: '100%',
                paddingHorizontal: 12,
                justifyContent: 'center',
              }}
              onPress={() => setIsPwdShown2(!isPwdShown2)}>
              {isPwdShown2 ? (
                <Icon name="eye-off" size={18} />
              ) : (
                <Icon name="eye" size={18} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Confirm New Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry={isPwdShown3 ? false : true}
              placeholderTextColor={'rgba(160, 163, 189, 1)'}
              placeholder="Confirm New Password"
              autoCapitalize="none"
              onChangeText={text => handleChangeForm(text, 'confirmPassword')}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                right: 10,
                top: 10,
                height: '100%',
                paddingHorizontal: 12,
                justifyContent: 'center',
              }}
              onPress={() => setIsPwdShown3(!isPwdShown3)}>
              {isPwdShown3 ? (
                <Icon name="eye-off" size={18} />
              ) : (
                <Icon name="eye" size={18} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.buttonSave}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleUpdatePassword}>
              <Text style={styles.save}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
