import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Offers from '../screens/Offers';
import Stores from '../screens/Stores';
import Coupons from '../screens/Coupons';
import HomeNavigator from '../navigators/HomeNavigator';
import componentStyles from '../styles/components';
import {colors, fontColors} from '../styles/variables';
import {Ionicons, MaterialCommunityIcons} from '../libs/vector-icons';
import {View, Text} from 'react-native';

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
        tabBarShowLabel: false,
        tabBarStyle: componentStyles.navigationContainer,
      })}>
      <Tab.Screen
        name="HomeNavigator"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={focused ? 'home-sharp' : 'md-home-outline'}
                size={22}
                color={focused ? colors.quaternary : colors.secondary}
              />
              <Text
                style={[
                  componentStyles.bottomLableFont,
                  {textAlign: 'center'},
                  {color: focused ? colors.quaternary : colors.secondary},
                ]}>
                Home
              </Text>
            </View>
          ),
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Offers"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={focused ? 'gift-sharp' : 'md-gift-outline'}
                size={22}
                color={focused ? colors.quaternary : colors.secondary}
              />
              <Text
                style={[
                  componentStyles.bottomLableFont,
                  {textAlign: 'center'},
                  {color: focused ? colors.quaternary : colors.secondary},
                ]}>
                OFERTAS
              </Text>
            </View>
          ),
        }}
        component={Offers}
      />
      <Tab.Screen
        name="Coupons"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name={
                  focused
                    ? 'credit-card-multiple'
                    : 'credit-card-multiple-outline'
                }
                size={22}
                color={focused ? colors.quaternary : colors.secondary}
              />
              <Text
                style={[
                  componentStyles.bottomLableFont,
                  {textAlign: 'center'},
                  {color: focused ? colors.quaternary : colors.secondary},
                ]}>
                Mis cupones
              </Text>
            </View>
          ),
        }}
        component={Coupons}
      />
      <Tab.Screen
        name="Stores"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center'}}>
              <Ionicons
                name={focused ? 'ios-location' : 'ios-location-outline'}
                size={22}
                color={focused ? colors.quaternary : colors.secondary}
              />
              <Text
                style={[
                  componentStyles.bottomLableFont,
                  {textAlign: 'center'},
                  {color: focused ? colors.quaternary : colors.secondary},
                ]}>
                Locales
              </Text>
            </View>
          ),
        }}
        component={Stores}
      />
    </Tab.Navigator>
  );
}
