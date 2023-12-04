import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeGlyphs from 'react-native-vector-icons/FontAwesome';
import {HomeScreen} from '../screens/HomeScreen';
import {NewsScreen} from '../screens/NewsScreen';
import {ChatScreen} from '../screens/ChatScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
export const HomeIcon = () => <FontAwesomeGlyphs name="home" size={24} />;
export const NewsIcon = () => (
  <FontAwesomeGlyphs name="newspaper-o" size={24} />
);
export const ChatIcon = () => <FontAwesomeGlyphs name="comments" size={24} />;
export const SettingsIcon = () => <FontAwesomeGlyphs name="cog" size={24} />;

export const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({}) => <HomeIcon />,
        headerShown: false,
        title: useTranslation('home'),
      }}
    />
    <Tab.Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarIcon: ({}) => <NewsIcon />,
        headerShown: false,
        title: useTranslation('news'),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        tabBarIcon: ({}) => <ChatIcon />,
        headerShown: false,
        title: useTranslation('chat'),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({}) => <SettingsIcon />,
        headerShown: false,
        title: useTranslation('home'),
      }}
    />
  </Tab.Navigator>
);
