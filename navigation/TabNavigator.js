import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { NewsScreen } from "../screens/NewsScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import CustomIcon from "../screens/CustomIcon";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color, size}) => CustomIcon('power-off'),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarIcon: ({color, size}) => CustomIcon('check'),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarIcon: ({color, size}) => CustomIcon('times'),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({color, size}) => CustomIcon('signal'),
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);
