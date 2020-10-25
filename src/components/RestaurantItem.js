import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const RestaurantItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image style={styles.image} source={{uri: props.restaurant.image_url}} />
      <Text style={styles.name}>{props.restaurant.name}</Text>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdbdbd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height * 0.3,
    margin: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// address: "416 Great Rd"
// area: "Boston / New England"
// city: "Acton"
// country: "US"
// id: 90817
// image_url: "https://www.opentable.com/img/restimages/90817.jpg"
// lat: 42.509747
// lng: -71.421144
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=90817"
// name: "Le Lyonnais Restaurant"
// phone: "9782639068"
// postal_code: "01720"
// price: 3
// reserve_url: "http://www.opentable.com/single.aspx?rid=90817"
// state: "MA"
