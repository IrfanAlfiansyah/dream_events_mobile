import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DefaultHeader from '../../components/Header/default';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function ChangePassword(props) {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown2, setIsPwdShown2] = useState(false);
  const [isPwdShown3, setIsPwdShown3] = useState(false);
  return (
    <>
      <DefaultHeader {...props} />
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.save}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
