import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CityItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Text style={styles.text}>{props.cityName}</Text>
    </TouchableOpacity>
  );
};

export {CityItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a3d62',
    paddingVertical: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#dfe4ea',
  },
});
