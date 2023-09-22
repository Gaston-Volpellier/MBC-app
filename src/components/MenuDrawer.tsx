import React from 'react';
import {View, Text, Pressable, ScrollView, Image, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {colors, fontColors} from '../styles/variables';
import styles from '../styles/styles';
import {AntDesign, Entypo, FontAwesome} from '../libs/vector-icons';
import HeaderSecondary from './HeaderSecondary';
import componentStyles from '../styles/components';
import fonts from '../styles/fonts';
import {CustomAppIcon} from '../libs/Custom.App.Icon';
import {useSession} from '../utils/SessionProvider';

export default function MenuDrawer(props): JSX.Element {
  const {
    isAuthenticated,
    socialData
  } = useSession();

  const instagramUrl = socialData['instagram'];
  const facebookUrl = socialData['facebook'];
  return (
    <ScrollView style={[{flex: 1}]}>
      <View style={[{justifyContent: 'space-between'}, styles.mb30]}>
        <HeaderSecondary
          title="MENÚ"
          iconLeft={
            isAuthenticated ? (
              <Pressable
                onPress={() => props.navigation.navigate('Settings_Settings')}>
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                  }}>
                  <FontAwesome
                    name="circle"
                    size={40}
                    color={colors.lightGray}
                  />
                  <CustomAppIcon
                    name="gear"
                    size={18}
                    color={colors.primary}
                    style={{position: 'absolute', zIndex: 99}}
                  />
                </View>
              </Pressable>
            ) : null
          }
          iconRight={
            <Pressable onPress={() => props.closeDrawer()}>
              <AntDesign
                name="closecircle"
                size={34}
                color={colors.terciary}
                style={componentStyles.IconSizeRegular}
              />
            </Pressable>
          }
        />
      </View>
      <DrawerContentScrollView {...props} style={[styles.mb40]}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={[styles.horizontalPadding, styles.mb30]}>
        <Text style={[fontColors.primary, fonts.primarySmall]}>
          Términos y Condiciones
        </Text>
        <View
          style={[{flexDirection: 'row'}, styles.centerContainer, styles.mb40]}>
          <Pressable onPress={() => Linking.openURL(facebookUrl)}>
            <Entypo
              name="facebook-with-circle"
              color={colors.primary}
              style={{marginEnd: 10}}
              size={50}
            />
          </Pressable>
          <Pressable onPress={() => Linking.openURL(instagramUrl)}>
            <Entypo
              name="instagram-with-circle"
              color={colors.primary}
              size={50}
            />
          </Pressable>
        </View>
        <Image
          source={require('../../assets/images/MBC_logo.png')}
          style={[styles.mb14, {height: 48, width: 102}]}
        />
        <Text style={[fontColors.lightGray, fonts.primarySmaller]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </ScrollView>
  );
}
