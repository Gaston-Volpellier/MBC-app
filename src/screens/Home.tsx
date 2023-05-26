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
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';

export default function Logging({navigation}): JSX.Element {
  return (
    <View>
      <Header />
      <ScrollView style={styles.mainContainer}></ScrollView>
    </View>
  );
}
