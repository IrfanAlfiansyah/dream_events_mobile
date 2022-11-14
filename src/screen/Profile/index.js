import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeHeader from '../../components/Header/home';

export default function Profile(props) {
  return (
    <>
      <HomeHeader {...props} />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Profile Screen</Text>
      </View>
    </>
  );
}

const style = StyleSheet.create({});
