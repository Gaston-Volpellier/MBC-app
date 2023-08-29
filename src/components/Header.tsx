import React, {useState} from 'react';
import {Image, View, Pressable} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';
import {Ionicons} from '../libs/vector-icons';
import {colors} from '../styles/variables';
import LoginModal from './LoginModal';
import {useSession} from '../utils/SessionProvider';
import {CustomAppIcon} from '../libs/Custom.App.Icon';
import {useNavigation} from '@react-navigation/native';

export default function Header({openDrawer, closeDrawer}): JSX.Element {
  const {photo, isAuthenticated, setLoginModalVisible} = useSession();
  const navigation = useNavigation();

  return (
    <View style={componentStyles.headerContainer}>
      <Pressable onPress={openDrawer}>
        <CustomAppIcon name="menu" size={20} color={colors.primary} />
      </Pressable>
      <Image
        source={require('../../assets/images/MBC_logo.png')}
        style={styles.mainLogo}
      />
      <Pressable
        onPress={() =>
          isAuthenticated
            ? navigation.navigate('Settings_Profile')
            : setLoginModalVisible(true)
        }>
        {photo ? (
          <Image
            source={{uri: photo}}
            style={{width: 44, height: 44, borderRadius: 50}}
          />
        ) : (
          <Ionicons name="person-circle" size={44} color={colors.terciary} />
        )}
      </Pressable>
      <LoginModal />
    </View>
  );
}
