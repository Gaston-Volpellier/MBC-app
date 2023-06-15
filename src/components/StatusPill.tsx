import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';

interface PillInterface {
  status?: number;
}

export default function PillComponent({status}: PillInterface): JSX.Element {
  return (
    <Text
      style={[
        componentStyles.cardThumbnailPill,
        fonts.primarySmaller,
        fontColors.secondary,
        backgroundColors.succsess,
        status == 1 ? backgroundColors.succsess : backgroundColors.danger,
      ]}>
      {status == 1 ? 'Activo' : 'Vencido'}
    </Text>
  );
}
