import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import profileDefault from '../../assets/auth/profile-empty.jpg';

export default function EditProfile() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const profile = useSelector(state => state.user.data);

  return (
    <>
      <ScrollView style={styles.profile}>
        <View style={styles.photoProfile}>
          <Image
            source={
              profile.image
                ? {
                    uri: `https://res.cloudinary.com/dizpe4s9c/image/upload/v1663089546/${profile.image}`,
                  }
                : profileDefault
            }
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
          <TextInput style={styles.input}>{profile.name}</TextInput>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input}>{profile.username}</TextInput>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input}>{profile.email}</TextInput>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Gender</Text>
          <TextInput style={styles.input}>{profile.gender}</TextInput>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Profession</Text>
          <TextInput style={styles.input}>{profile.profession}</TextInput>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Nationality</Text>
          <TextInput style={styles.input}>{profile.nationality}</TextInput>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Birtday Date</Text>
          <View style={styles.datePicker}>
            <TextInput style={styles.inputDate}>
              {profile.dateOfBirth}
            </TextInput>
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
