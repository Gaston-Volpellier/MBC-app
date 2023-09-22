import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import componentStyles from '../styles/components';
import MenuDrawer from '../components/MenuDrawer';
import SettingsNavigator from './SettingsNavigator';
import fonts from '../styles/fonts';
import {colors, fontColors} from '../styles/variables';
import {Text} from 'react-native';
import {useSession} from '../utils/SessionProvider';
import {Pressable, Linking} from 'react-native';
import * as api from '../services/api';

type RootStackParamList = {
  Home_bottom: undefined;
  Offers_bottom: undefined;
  Coupons_bottom: undefined;
  Stores_bottom: undefined;
  Online_store: undefined;
  Settings_Profile: undefined;
  Settings_Settings: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function DrawerNavigator(props) {
  const {
    isAuthenticated,
    setSocialData,
    socialData
  } = useSession();

  useEffect(() => {
    const loadSocial = async () => {
      try {
        const response = await api.fetchSocialTerms();

        if (!response.error) {
          setSocialData(response.data);
        } else {
          console.log('Soaicl error: ', response.error);
        }
        
      } catch (error) {
        console.log('Error fetching ad from server: ', error);
      }
    };

    loadSocial();
  }, []);

  return (
    <Drawer.Navigator
      initialRouteName="Home_bottom"
      screenOptions={{
        headerShown: false,
        drawerStyle: componentStyles.drawerStyle,
        drawerItemStyle: {
          padding: -5,
          marginVertical: -5,
        },
      }}
      drawerContent={props => (
        <MenuDrawer
          {...props}
          closeDrawer={() => props.navigation.closeDrawer()}
        />
      )}>
      <Drawer.Screen
        name="Home_bottom"
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                fonts.secondaryMain,
                focused ? fonts.underlined : null,
                focused ? fontColors.terciary : fontColors.primary,
                {marginVertical: -10},
              ]}>
              INICIO
            </Text>
          ),
          drawerActiveTintColor: colors.secondary,
        }}
        initialParams={{routeName: 'HomeNavigator'}}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Offers_bottom"
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                fonts.secondaryMain,
                focused ? fonts.underlined : null,
                focused ? fontColors.terciary : fontColors.primary,
                {marginVertical: -10},
              ]}>
              Ofertas
            </Text>
          ),
          drawerActiveTintColor: colors.secondary,
        }}
        initialParams={{routeName: 'Offers'}}
        component={BottomNavigator}
      />
      {isAuthenticated ? (
        <Drawer.Screen
          name="Coupons_bottom"
          options={{
            drawerLabel: ({focused}) => (
              <Text
                style={[
                  fonts.secondaryMain,
                  focused ? fonts.underlined : null,
                  focused ? fontColors.terciary : fontColors.primary,
                  {marginVertical: -10},
                ]}>
                Mis cupones
              </Text>
            ),
            drawerActiveTintColor: colors.secondary,
          }}
          initialParams={{routeName: 'Coupons'}}
          component={BottomNavigator}
        />
      ) : null}

      <Drawer.Screen
        name="Stores_bottom"
        options={{
          drawerLabel: ({focused}) => (
            <Text
              style={[
                fonts.secondaryMain,
                focused ? fonts.underlined : null,
                focused ? fontColors.terciary : fontColors.primary,
                {marginVertical: -10},
              ]}>
              Locales
            </Text>
          ),
          drawerActiveTintColor: colors.secondary,
        }}
        initialParams={{routeName: 'Stores'}}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Online_store"
        options={{
          drawerLabel: ({focused}) => (
            <Pressable
              onPress={() =>
                Linking.openURL(socialData['tienda'])
              }>
              <Text
                style={[
                  fonts.secondaryMain,
                  focused ? fonts.underlined : null,
                  focused ? fontColors.terciary : fontColors.primary,
                  {marginVertical: -10},
                ]}>
                Tienda Online
              </Text>
            </Pressable>
          ),
          drawerActiveTintColor: colors.secondary,
        }}
        initialParams={{routeName: 'HomeNavigator'}}
        component={BottomNavigator}
      />
      {isAuthenticated ? (
        <Drawer.Screen
          name="Settings_Profile"
          options={{
            drawerLabel: ({focused}) => (
              <Text
                style={[
                  fonts.secondaryMain,
                  focused ? fonts.underlined : null,
                  focused ? fontColors.terciary : fontColors.primary,
                  {marginVertical: -10},
                ]}>
                Perfil y cuenta
              </Text>
            ),
            drawerActiveTintColor: colors.secondary,
          }}
          initialParams={{routeName: 'Profile'}}
          component={SettingsNavigator}
        />
      ) : null}
      {isAuthenticated ? (
        <Drawer.Screen
          name="Settings_Settings"
          options={{
            drawerLabel: ({focused}) => (
              <Text
                style={[
                  fonts.secondaryMain,
                  focused ? fonts.underlined : null,
                  focused ? fontColors.terciary : fontColors.primary,
                  {marginVertical: -10},
                ]}>
                Ajustes
              </Text>
            ),
            drawerActiveTintColor: colors.secondary,
          }}
          initialParams={{routeName: 'Settings'}}
          component={SettingsNavigator}
        />
      ) : null}
    </Drawer.Navigator>
  );
}
