import React from 'react';
import {Image, View, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';
import Spinner from '../components/Spinner';

export default function Loading(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={[componentStyles.loadingContainer]}>
        <View style={styles.centerContainer}>
          <Image
            style={styles.homeLogo}
            source={require('../../assets/images/MBC_logo.png')}
          />
          <Spinner />
        </View>
      </View>
    </SafeAreaView>
  );
}
