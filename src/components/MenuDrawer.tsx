import React from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors, fontColors} from '../styles/variables';
import styles from '../styles/styles';
import {AntDesign, Entypo, EvilIcons} from '../libs/vector-icons';
import HeaderSecondary from './HeaderSecondary';
import componentStyles from '../styles/components';
import fonts from '../styles/fonts';

export default function MenuDrawer(props): JSX.Element {
  return (
    <ScrollView style={[{flex: 1}]}>
      <View style={{justifyContent: 'space-between'}}>
        <HeaderSecondary
          title="Menu"
          iconLeft={
            <Pressable>
              <EvilIcons
                name="gear"
                size={35}
                color={colors.primary}
                style={componentStyles.IconSizeRegular}
              />
            </Pressable>
          }
          iconRight={
            <Pressable onPress={() => props.closeDrawer()}>
              <AntDesign
                name="closecircle"
                size={35}
                color={colors.terciary}
                style={componentStyles.IconSizeRegular}
              />
            </Pressable>
          }
        />
      </View>
      <DrawerContentScrollView {...props} style={{paddingStart: 13}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={[styles.horizontalPadding, {paddingBottom: 50}]}>
        <Text style={[fontColors.primary, fonts.primarySmall]}>
          Términos y Condiciones
        </Text>
        <Text style={[fontColors.primary, fonts.primarySmall, styles.mb20]}>
          Lorem Ipsum
        </Text>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb40]}>
          <Entypo
            name="instagram-with-circle"
            color={colors.primary}
            size={50}
            style={{marginEnd: 10}}
          />
          <Entypo
            name="facebook-with-circle"
            color={colors.primary}
            size={50}
          />
        </View>
        <Image
          source={require('../../assets/images/MBC_logo.png')}
          style={[styles.mb14, {height: 48, width: 102}]}
        />
        <Text style={[fontColors.lightGray, fonts.primarySmall]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </ScrollView>
  );
}
