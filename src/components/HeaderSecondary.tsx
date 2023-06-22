import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {EvilIcons} from '../libs/vector-icons';
import styles from '../styles/styles';
import componentStyles from '../styles/components';

export default function HeaderSecondary(props): JSX.Element {
  const title = props.title;
  const iconPrimary = props.iconPrimary;
  const iconSecondary = props.iconSecondary;
  const primaryAction = props.primaryAction;
  const secondaryAction = props.secondaryAction;

  return (
    <View
      style={[
        styles.horizontalAlign,
        styles.horizontalPadding,
        styles.mb20,
        backgroundColors.secondary,
        {paddingTop: 10},
      ]}>
      <Text style={[fonts.secondaryMain, fontColors.terciary]}>{title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{marginRight: 8}}>{props.iconLeft}</View>
        <View>{props.iconRight}</View>
      </View>
    </View>
  );
}
