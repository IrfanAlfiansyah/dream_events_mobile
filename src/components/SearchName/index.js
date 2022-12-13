import React, {useState} from 'react';
import {TextInput, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function SearchName(props) {
  const [textSearch, setTextSearch] = useState(props.searchName);

  const handleSearch = text => {
    setTextSearch(text);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        placeholder="Search Event..."
        onChangeText={text => handleSearch(text)}
        onEndEditing={() => props.search(textSearch)}
      />
      <TouchableOpacity>
        <Text style={styles.button}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
