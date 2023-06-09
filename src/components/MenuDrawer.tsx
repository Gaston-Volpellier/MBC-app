import React from 'react';
import {View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../styles/variables';
import HeaderDrawer from './HeaderDrawer';
import {Entypo} from '../libs/vector-icons';

export default function MenuDrawer(props): JSX.Element {
  return (
    <View style={{flex: 1}}>
      {/* <View style={{justifyContent: 'space-between'}}> */}
      <HeaderDrawer />
      {/* </View> */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <Entypo name="instagram-with-circle" color={colors.primary} size={24} />
        <Entypo name="facebook-with-circle" color={colors.primary} size={24} />
      </View>
    </View>
  );
}
