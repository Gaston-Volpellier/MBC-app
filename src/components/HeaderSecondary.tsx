import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {EvilIcons} from '../libs/vector-icons';
import styles from '../styles/styles';

export default function HeaderSecondary(props): JSX.Element {
  const title = props.title;
  const iconPrimary = props.iconPrimary;
  const iconSecondary = props.iconSecondary;
  const primaryAction = props.primaryAction;
  const secondaryAction = props.secondaryAction;

  return (
    <View
      style={[
        {
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 10,
        },
        styles.horizontalPadding,
        styles.mb40,
        backgroundColors.secondary,
      ]}>
      <Text style={[fonts.secondaryMain, fontColors.terciary]}>{title}</Text>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => secondaryAction()}>
          <EvilIcons name={iconSecondary} size={41} color={colors.primary} />
        </Pressable>
        <Pressable onPress={() => primaryAction()}>
          <EvilIcons name={iconPrimary} size={41} color={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
}
