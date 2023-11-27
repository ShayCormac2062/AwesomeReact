import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DeepLinking from './navigation/DeepLinking';
import HomeScreen from './screens/HomeScreen';
import NestedScreen from './screens/NestedScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const navigationRef = React.createRef<any>();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    {/* Add other screens if needed */}
  </Stack.Navigator>
);

const NestedStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="NestedScreen" component={NestedScreen} />
    {/* Add other screens in the nested stack if needed */}
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="MainStack" component={MainStack} />
    <Tab.Screen name="NestedStack" component={NestedStack} />
  </Tab.Navigator>
);

const App = () => {
  useEffect(() => {
    // Adding a listener for handling deep links
    DeepLinking.addEventListener();

    // Handling the deep link when the application is opened via a deep link
    DeepLinking.getInitialURL().then(url => {
      if (url) {
        DeepLinking.handleOpenURL({url});
      }
    });

    return () => {
      // Removing the listener when the component is unmounted
      DeepLinking.removeEventListener();
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
