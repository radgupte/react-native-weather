import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env';
import { useGetWeather } from './src/hooks/useGetWeather';

const Tab = createBottomTabNavigator();

const App = () => {
  const [loading, error, weather] = useGetWeather();
  console.log(loading, error, weather);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
