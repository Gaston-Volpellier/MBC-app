import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';
import Icon from 'react-native-vector-icons/Ionicons';
import {fontColors} from '../styles/variables';
import {useNavigation} from '@react-navigation/native';

export default function Header(props): JSX.Element {
  return (
    <View style={componentStyles.headerContainer}>
      <Pressable>
        <Icon name="md-menu-sharp" size={24} color={fontColors.primary} />
      </Pressable>
      <Image
        source={require('../../assets/images/MBC_logo.png')}
        style={styles.mainLogo}
      />
      <Pressable>
        <Icon name="person-circle" size={42} color={fontColors.terciary} />
      </Pressable>
    </View>
  );
}
