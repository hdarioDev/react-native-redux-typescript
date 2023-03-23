import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <CounterScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
