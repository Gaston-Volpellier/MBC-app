import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Offers from '../screens/Offers';
import Stores from '../screens/Stores';
import Coupons from '../screens/Coupons';
import HomeNavigator from '../navigators/HomeNavigator';
import componentStyles from '../styles/components';
import {colors} from '../styles/variables';
import {Ionicons} from '../libs/vector-icons';

type BottomStackParamList = {
  HomeNavigator: undefined;
  Offers: undefined;
  Coupons: undefined;
  Stores: undefined;
};

const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function BottomNavigator({route}): JSX.Element {
  const routeName = route.params.routeName;

  return (
    <Tab.Navigator
      initialRouteName={routeName}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: componentStyles.navigationContainer,
        tabBarLabelStyle: componentStyles.bottomLableFont,
        tabBarActiveTintColor: colors.quaternary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;

          if (route.name === 'HomeNavigator') {
            iconName = focused ? 'home-sharp' : 'md-home-outline';
          } else if (route.name === 'Offers') {
            iconName = focused ? 'gift-sharp' : 'md-gift-outline';
          } else if (route.name === 'Coupons') {
            iconName = focused ? 'ios-card' : 'ios-card-outline';
          } else if (route.name === 'Stores') {
            iconName = focused ? 'ios-location-sharp' : 'ios-location-outline';
          }

          return <Ionicons name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeNavigator"
        options={{tabBarLabel: 'Home'}}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Offers"
        options={{tabBarLabel: 'Ofertas'}}
        component={Offers}
      />
      <Tab.Screen
        name="Coupons"
        options={{tabBarLabel: 'Mis Cupones'}}
        component={Coupons}
      />
      <Tab.Screen
        name="Stores"
        options={{tabBarLabel: 'Locales'}}
        component={Stores}
      />
    </Tab.Navigator>
  );
}
