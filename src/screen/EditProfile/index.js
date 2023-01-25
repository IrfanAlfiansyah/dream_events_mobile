import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ActivityIndicator,
  Pressable,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import profileDefault from '../../assets/auth/profile-empty.jpg';
import {
  getUserById,
  updateImage,
  updateProfile,
} from '../../stores/action/user';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function EditProfile(props) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const profile = useSelector(state => state.user.data);
  const [imageprev, setimageprev] = useState(profile.image);
  const [image, setImage] = useState(profile.image);
  const [binaryImage, setBinaryImage] = useState(profile.image);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [form, setForm] = useState({
    name: '',
    username: '',
    profession: '',
    nationality: '',
    gender: '',
    dateOfBirth: '',
  });

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const handleChangeUser = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleUpdateProfile = async () => {
    try {
      const id = profile.userId;
      setIsLoading(true);
      const result = await dispatch(updateProfile(id, form));
      ToastAndroid.show(result.action.payload.data.message, ToastAndroid.LONG);
      props.navigation.navigate('Profile');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
    }
  };

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
      maxHeight: 1000,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('cancel image');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setimageprev(data.uri);
        setImage(data);
        setBinaryImage(data.base64);
      }
    });
  };

  const openLibrary = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true,
      maxHeight: 1000,
    };
    launchImageLibrary(option, res => {
      if (res.didCancel) {
        console.log('cencel image');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setimageprev(data.uri);
        setImage(data);
      }
    });
  };

  const handleUpdateImage = async () => {
    try {
      const id = profile.userId;
      console.log('GANTI FOTO YUK');
      const body = new FormData();
      body.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
      setIsLoading(true);
      const result = await dispatch(updateImage(id, body));
      ToastAndroid.show(result.action.payload.data.message, ToastAndroid.LONG);
      await dispatch(getUserById(id));
      setModalVisible(!modalVisible);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      ToastAndroid.show(error.response.data.message, ToastAndroid.LONG);
    }
  };

  return (
    <>
      <ScrollView
        style={styles.profile}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.wrapper}>
          {/* MODAL UPDATE IMAGE */}
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Change Image Profile</Text>
                  <Image source={{uri: imageprev}} style={styles.imagePrev} />
                  <Pressable
                    style={[styles.buttonModal, styles.buttonModalClose]}
                    onPress={() => handleUpdateImage()}>
                    {isLoading ? (
                      <ActivityIndicator color="white" size="small" />
                    ) : (
                      <Text style={styles.textStyle}>OK</Text>
                    )}
                  </Pressable>
                  <Pressable
                    style={[styles.buttonModal, styles.buttonModalClose]}
                    onPress={openCamera}>
                    <Text style={styles.textStyle}>Open Camera</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.buttonModal, styles.buttonModalClose]}
                    onPress={openLibrary}>
                    <Text style={styles.textStyle}>Image Library</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.buttonModal, styles.buttonModalClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
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
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              onChangeText={text => handleChangeUser(text, 'image')}>
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
              selectTextOnFocus={false}
              placeholderTextColor={'rgba(105, 111, 121, 0.8)'}
              placeholder={profile.name}
              onChangeText={text => handleChangeUser(text, 'name')}
            />
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              selectTextOnFocus={false}
              placeholderTextColor={'rgba(105, 111, 121, 0.8)'}
              placeholder={profile.username}
              onChangeText={text => handleChangeUser(text, 'username')}
            />
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input}>{profile.email}</TextInput>
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              selectTextOnFocus={false}
              placeholderTextColor={'rgba(105, 111, 121, 0.8)'}
              placeholder={profile.gender}
              onChangeText={text => handleChangeUser(text, 'gender')}
            />
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Profession</Text>
            <TextInput
              style={styles.input}
              selectTextOnFocus={false}
              placeholderTextColor={'rgba(105, 111, 121, 0.8)'}
              placeholder={profile.profession}
              onChangeText={text => handleChangeUser(text, 'profession')}
            />
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Nationality</Text>
            <TextInput
              style={styles.input}
              selectTextOnFocus={false}
              placeholderTextColor={'rgba(105, 111, 121, 0.8)'}
              placeholder={profile.nationality}
              onChangeText={text => handleChangeUser(text, 'nationality')}
            />
          </View>
          <View style={styles.textEdit}>
            <Text style={styles.label}>Birtday Date</Text>
            <View style={styles.datePicker}>
              <TextInput
                style={styles.inputDate}
                type={date}
                placeholder={profile.dateOfBirth}
                placeholderTextColor={'rgba(105, 111, 121, 0.8)'}
                value={form.dateOfBirth}
                onChangeText={text => handleChangeUser(text, 'dateOfBirth')}
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
            <TouchableOpacity
              style={styles.button}
              onPress={handleUpdateProfile}>
              {isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text style={styles.save}>Save</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
