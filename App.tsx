/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import {StackNavigator} from './navigation/StackNavigator';
import { ThemeProviderImpl } from "./src/modules/theme/ThemeProvider";
function App(): JSX.Element {
  return (
    <ThemeProviderImpl>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProviderImpl>
  );
}

export default App;
