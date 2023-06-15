import React from 'react';
import {View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors} from '../styles/variables';
import styles from '../styles/styles';
import {Entypo} from '../libs/vector-icons';
import HeaderSecondary from './HeaderSecondary';

export default function MenuDrawer(props): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'space-between'}}>
        <HeaderSecondary
          title="Menu"
          iconPrimary="close-o"
          iconSecondary="gear"
          secondaryAction={() => props.closeDrawer()}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
        <Entypo name="instagram-with-circle" color={colors.primary} size={50} />
        <Entypo name="facebook-with-circle" color={colors.primary} size={50} />
      </View>
    </View>
  );
}
