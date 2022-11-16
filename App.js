import React from 'react';
import MainStackNavigator from './src/navigation';
import {Provider} from 'react-redux';
import stores from './src/stores';
import {PersistGate} from 'redux-persist/integration/react';

const {persistor, store} = stores;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
