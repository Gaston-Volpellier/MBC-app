import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Offers from '../screens/Offers';
import Stores from '../screens/Stores';
import Coupons from '../screens/Coupons';
import HomeNavigator from '../navigators/HomeNavigator';
import componentStyles from '../styles/components';
import {backgroundColors} from '../styles/variables';

const Tab = createBottomTabNavigator();

export default function BottomNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: componentStyles.navigationContainer,
        tabBarLabelStyle: componentStyles.bottomLableFont,
        tabBarActiveTintColor: backgroundColors.primary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'HomeNavigator') {
            iconName = focused ? 'home-sharp' : 'md-home-outline';
          } else if (route.name === 'Ofertas') {
            iconName = focused ? 'gift-sharp' : 'md-gift-outline';
          } else if (route.name === 'Mis Cupones') {
            iconName = focused ? 'ios-card' : 'ios-card-outline';
          } else if (route.name === 'Locales') {
            iconName = focused ? 'ios-location-sharp' : 'ios-location-outline';
          }

          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeNavigator"
        options={{tabBarLabel: 'Home'}}
        component={HomeNavigator}
      />
      <Tab.Screen name="Ofertas" component={Offers} />
      <Tab.Screen name="Mis Cupones" component={Coupons} />
      <Tab.Screen name="Locales" component={Stores} />
    </Tab.Navigator>
  );
}
