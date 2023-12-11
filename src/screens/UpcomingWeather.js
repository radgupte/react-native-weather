import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );
  const { droidSafeArea, image } = styles;
  return (
    <SafeAreaView style={droidSafeArea}>
      <ImageBackground source={require('../../assets/rain.jpg')} style={image}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    // marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
export default UpcomingWeather;
