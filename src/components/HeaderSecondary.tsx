import React from 'react';
import {View, Text} from 'react-native';
import {backgroundColors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import styles from '../styles/styles';

export default function HeaderSecondary(props): JSX.Element {
  const title = props.title;
  return (
    <View
      style={[
        styles.horizontalAlign,
        styles.horizontalPadding,
        styles.mb20,
        backgroundColors.secondary,
        {paddingVertical: 20},
      ]}>
      <Text style={[fonts.secondaryMain, fontColors.terciary]}>{title}</Text>
      <View style={[styles.centerContainer, {flexDirection: 'row'}]}>
        <View style={{marginRight: 8}}>{props.iconLeft}</View>
        <View>{props.iconRight}</View>
      </View>
    </View>
  );
}
