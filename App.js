import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
};

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
  },
});
export default App;
