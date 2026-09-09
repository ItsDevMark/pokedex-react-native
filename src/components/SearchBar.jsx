import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder='Search Pokémon...'
      value={value}
      onChangeText={onChangeText}
      clearButtonMode='while-editing'
    />
  );
}

const styles = StyleSheet.create({
  input: { height: 44, backgroundColor: '#EFEFEF', borderRadius: 8, paddingHorizontal: 12, margin: 12 }
});
