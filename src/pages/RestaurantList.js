import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {RestaurantItem, SearchBar} from '../components';

let originalList = [];

const RestaurantList = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const {selectedCity} = props.route.params;
  const [isLoading, setLoading] = useState(true);

  //THEN-CATCH
  const fetchRestaurants = () => {
    axios
      .get('http://opentable.herokuapp.com/api/restaurants', {
        params: {
          city: selectedCity,
        },
      })
      .then((response) => {
        setRestaurantList(response.data.restaurants);
        originalList = [...response.data.restaurants];
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const renderRestaurants = ({item}) => {
    return (
      <RestaurantItem
        restaurant={item}
        onSelect={() =>
          props.navigation.navigate('Details', {selectedRestaurant: item})
        }
      />
    );
  };

  function searchRestaurant(input) {
    const filteredRestaurants = originalList.filter((restaurant) => {
      const text = input.toUpperCase();
      const restaurantName = restaurant.name.toUpperCase();

      return restaurantName.indexOf(text) > -1;
    });

    setRestaurantList(filteredRestaurants);
  }
  // ----------------BODY---------------
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0a3d62'}}>
      <View>
        <View style={{backgroundColor: '#0a3d62', padding: 10}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#badc58'}}>
            {selectedCity} City Restaurants
          </Text>
        </View>
        <SearchBar onSearch={(value) => searchRestaurant(value)} />
        {/* ------ACTIVITY INDICATOR--------- */}
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#00ff00"
            style={{marginTop: 300}}
          />
        ) : null}
        {/* --------------------------- */}
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={restaurantList}
          renderItem={renderRestaurants}
        />
      </View>
    </SafeAreaView>
  );
};

export {RestaurantList};
