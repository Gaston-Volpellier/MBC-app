import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Offers from '../screens/Home';
import Coupons from '../screens/Coupons';
import Stores from '../screens/Stores';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home_bottom">
      <Drawer.Screen name="Home_bottom" component={BottomNavigator} />
      <Drawer.Screen name="Ofertas" component={Offers} />
      <Drawer.Screen name="Mis Cupones" component={Coupons} />
      <Drawer.Screen name="Locales" component={Stores} />
      <Drawer.Screen name="Perfil y Cuenta" component={Profile} />
      <Drawer.Screen name="Ajustes" component={Settings} />
    </Drawer.Navigator>
  );
}
