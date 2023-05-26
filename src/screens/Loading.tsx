import React from 'react';
import {Image, View, ActivityIndicator, Button} from 'react-native';
import styles from '../styles/styles';

export default function Loading({navigation}): JSX.Element {
  return (
    <View>
      {/* Boton para avanzar de pantalla */}
      <Button
        title="Go to Logging screen"
        onPress={() => {
          navigation.navigate('Logging', {name: 'Logging'});
        }}
      />
      <View style={styles.loadingContainer}>
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
