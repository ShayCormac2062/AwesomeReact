/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigation/StackNavigator';
import LangAdapter from './lang/LangAdapter';
import {I18nextProvider} from 'react-i18next';
import i18n from './lang/i18n';

function App() {
  useEffect(() => {
    LangAdapter.init();
  }, []);
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;
