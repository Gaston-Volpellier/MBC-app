import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';

export default function Profile({navigation}): JSX.Element {
  return (
    <View style={styles.previewScreen}>
      <Text style={[fonts.primary, {marginBottom: 25}]}>Profile</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={componentStyles.secondaryButton}>Go back</Text>
      </Pressable>
    </View>
  );
}
