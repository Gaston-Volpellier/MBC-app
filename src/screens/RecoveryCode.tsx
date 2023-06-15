import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function RecoveryCode({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="CREÁ TU NUEVA CONTRASEÑA"
        iconPrimary="close-o"
        iconSecondary=""
        primaryAction={() => navigation.goBack()}
      />
      <ScrollView
        style={[
          componentStyles.mainContainer,
          styles.horizontalPadding,
          backgroundColors.secondary,
        ]}>
        <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
          Por favor ingresá tu nueva contraseña
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          ***********
        </Text>
        <Text>Debe tener entre 8 y 12 caracteres</Text>
        <Text>Debe incluir minúsculas y mayúsculas</Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
          CONFIRMÁ TU CONTRASEÑA
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          ***********
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Pressable
          style={[componentStyles.secondaryButton, backgroundColors.quaternary]}
          onPress={() => navigation.navigate('Access')}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            CONTINUAR
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
