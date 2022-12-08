import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from '../../utils/axios';

export default function DetailHeader(props) {
  const [addWishlist, setAddWishlist] = useState(false);
  const eventId = props.route.params.eventId;

  const [form, setForm] = useState({
    eventId: eventId,
  });

  const handleAddWishlist = async () => {
    try {
      const result = await axios.post('wishlist', form);
      alert(result.data.msg);
      // cekWishlist();
    } catch (error) {
      console.error(error.response);
    }
  };

  // const cekWishlist = async () => {
  //   const cek = await axios.get(`wishlist/${userId}`);
  //   const searchWishlist = cek.data.data.filter(
  //     (item) => eventId == item.eventId
  //   );
  //   console.log(searchWishlist);
  //   if (searchWishlist.length > 0) {
  //     setAddWishlist(true);
  //   } else {
  //     setAddWishlist(false);
  //   }
  // };

  const backScreen = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <Icon name="long-arrow-left" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddWishlist}>
        <Icon name="heart" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: 'rgba(51, 102, 255, 1)',
  },
});
