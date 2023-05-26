import React from 'react';
import {
  Image,
  View,
  ActivityIndicator,
  Button,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';

export default function Header(): JSX.Element {
  return (
    <View style={componentStyles.headerContainer}>
      <Text>Menu</Text>
      <Image
        source={require('../../assets/images/MBC_logo.png')}
        style={styles.mainLogo}
      />
      <Text>Icon</Text>
    </View>
  );
}
