import React, { useEffect } from 'react';
import Reactotron from 'reactotron-react-native';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch, useSelector } from 'react-redux';

import ErrorBoundary from './src/components/common/ErrorBoundary';
import { initKeyring } from './src/redux/slices/keyring';
import { persistor, store } from './src/redux/store';
import Routes from './src/navigation';
import './reactotronConfig';

const PersistedApp = () => {
  const { instance } = useSelector(state => state.keyring);
  const dispatch = useDispatch();

  useEffect(() => {
    if (instance) {
      SplashScreen.hide();
    } else {
      console.log('init');
      dispatch(initKeyring());
    }
  }, [instance]);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary>{!!instance && <Routes />}</ErrorBoundary>
    </PersistGate>
  );
};

const App = () => (
  <Provider store={store}>
    <PersistedApp />
  </Provider>
);

export default __DEV__ ? Reactotron.overlay(App) : App;
