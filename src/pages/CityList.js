import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {CityItem, SearchBar} from '../components';

let originalList = [];

const CityList = (props) => {
  const [cityList, setCityList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // const fetchCityData = ()=>{
  //     axios.get('http://opentable.herokuapp.com/api/cities').then(response)=>{
  //         setCityList(response.data)
  //     }
  // }

  const fetchCityData = async () => {
    const {data} = await axios.get('http://opentable.herokuapp.com/api/cities');
    console.log(data);
    setCityList(data.cities);
    originalList = [...data.cities];
    setLoading(false);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => (
    <CityItem
      cityName={item}
      onSelect={() =>
        props.navigation.navigate('Restaurants', {selectedCity: item})
      }
    />
  );
  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#badc58'}}></View>
  );

  function searchCity(input) {
    const filteredCities = originalList.filter((city) => {
      const text = input.toUpperCase();
      const cityName = city.toUpperCase();

      return cityName.indexOf(text) > -1;
    });

    setCityList(filteredCities);
  }
  // ----------------BODY------------------
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0a3d62'}}>
      <View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#badc58'}}>
            Cities
          </Text>
        </View>
        <SearchBar onSearch={(value) => searchCity(value)} />
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
          data={cityList}
          renderItem={renderCities}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};

export {CityList};
