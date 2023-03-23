import {View} from 'react-native';
import React from 'react';
import Counter from '../components/Counter';
import ButtonRedux from '../components/ButtonRedux';

const CounterScreen = () => {
  return (
    <View>
      <Counter />
      <ButtonRedux title="Incremet" />
      <ButtonRedux title="Decrement" />
    </View>
  );
};

export default CounterScreen;
