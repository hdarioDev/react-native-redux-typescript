import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useAppSelector} from '../app/hooks';

const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#5c5aee',
  },

  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#008c99',
    marginBottom: 30,
  },
});
