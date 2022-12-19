import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {updatePwd} from '../../stores/action/user';
import {useDispatch, useSelector} from 'react-redux';

export default function ChangePassword(props) {
  const dispatch = useDispatch();
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown2, setIsPwdShown2] = useState(false);
  const [isPwdShown3, setIsPwdShown3] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const profile = useSelector(state => state.user.data);
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
      const id = profile.userId;
      setIsLoading(true);
      const result = await dispatch(updatePwd(id, form));
      ToastAndroid.show(result.action.payload.data.message, ToastAndroid.LONG);
      props.navigation.navigate('Profile');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
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
              style={styles.iconEye}
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
              style={styles.iconEye}
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
              style={styles.iconEye}
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
              {isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text style={styles.save}>Update</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
