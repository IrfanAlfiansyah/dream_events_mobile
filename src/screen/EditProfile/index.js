import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DefaultHeader from '../../components/Header/default';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';

export default function EditProfile(props) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <DefaultHeader {...props} />
      <ScrollView style={styles.profile}>
        <View style={styles.photoProfile}>
          <Image
            source={require('../../assets/auth/profile.jpg')}
            style={styles.photo}
          />
          <TouchableOpacity>
            <Icon
              name="image-edit-outline"
              size={40}
              style={styles.editImage}
              color="red"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Profession</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Nationality</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="name"
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Birtday Date</Text>
          <View style={styles.datePicker}>
            <TextInput
              style={styles.inputDate}
              placeholderTextColor={'rgba(160, 163, 189, 1)'}
              placeholder="name"
            />
            <View style={styles.textEdit}>
              <TouchableOpacity title="Open" onPress={() => setOpen(true)}>
                <Icon name="clock-edit-outline" size={25} color="blue" />
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonSave}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
