import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import BottomNavigator from './BottomNavigator';
import componentStyles from '../styles/components';
import MenuDrawer from '../components/MenuDrawer';
import SettingsNavigator from './SettingsNavigator';

type RootStackParamList = {
  Home_bottom: undefined;
  Offers_bottom: undefined;
  Coupons_bottom: undefined;
  Stores_bottom: undefined;
  Settings_Profile: undefined;
  Settings_Settings: undefined;
};

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function DrawerNavigator(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home_bottom"
      screenOptions={{
        headerShown: false,
        drawerStyle: componentStyles.drawerStyle,
      }}
      drawerContent={props => (
        <MenuDrawer
          {...props}
          closeDrawer={() => props.navigation.closeDrawer()}
        />
      )}>
      <Drawer.Screen
        name="Home_bottom"
        options={{drawerLabel: 'Home'}}
        initialParams={{routeName: 'HomeNavigator'}}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Offers_bottom"
        options={{drawerLabel: 'Ofertas'}}
        initialParams={{routeName: 'Offers'}}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Coupons_bottom"
        options={{drawerLabel: 'Mis Cupones'}}
        initialParams={{routeName: 'Coupons'}}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Stores_bottom"
        options={{drawerLabel: 'Locales'}}
        initialParams={{routeName: 'Stores'}}
        component={BottomNavigator}
      />
      <Drawer.Screen
        name="Settings_Profile"
        options={{drawerLabel: 'Perfil y Cuenta'}}
        initialParams={{routeName: 'Profile'}}
        component={SettingsNavigator}
      />
      <Drawer.Screen
        name="Settings_Settings"
        options={{drawerLabel: 'Ajustes'}}
        initialParams={{routeName: 'Settings'}}
        component={SettingsNavigator}
      />
    </Drawer.Navigator>
  );
}
