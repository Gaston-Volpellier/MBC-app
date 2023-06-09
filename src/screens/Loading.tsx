import React from 'react';
import {Image, View, ActivityIndicator, Button} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';

export default function Loading(): JSX.Element {
  return (
    <View>
      <View style={[componentStyles.loadingContainer]}>
        <View style={styles.centerContainer}>
          <Image
            style={styles.homeLogo}
            source={require('../../assets/images/MBC_logo.png')}
          />
          <ActivityIndicator size={64} color="gray" />
        </View>
      </View>
    </View>
  );
}
