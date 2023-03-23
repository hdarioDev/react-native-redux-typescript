import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {increment} from '../app/futures/counter/counterSlice';

interface ButtonReduxProps {
  title: string;
}

const ButtonRedux = ({title}: ButtonReduxProps) => {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      onPress={() => dispatch(increment())}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 10,
    backgroundColor: '#2c3e50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default ButtonRedux;
