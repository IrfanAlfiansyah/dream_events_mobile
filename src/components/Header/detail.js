import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function DetailHeader(props) {
  const backScreen = () => {
    props.navigation.navigate('Home');
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <Icon name="long-arrow-left" size={25} color="white" />
      </TouchableOpacity>
      <View>
        <Icon name="heart" size={25} color="white" />
      </View>
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
