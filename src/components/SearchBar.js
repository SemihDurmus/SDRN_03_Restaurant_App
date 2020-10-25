import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => props.onSearch(value)}
        placeholderTextColor="#e0e0e0"
        style={styles.text}
      />
      <Text style={styles.glass}>🔎</Text>
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f3542',
    padding: 15,
    borderTopColor: '#badc58',
    borderBottomColor: '#badc58',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#e0e0e0',
    textAlign: 'center',
  },
  glass: {
    position: 'absolute',
    left: 20,
    top: 6,
    fontSize: 36,
  },
});
