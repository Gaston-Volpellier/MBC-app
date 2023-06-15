import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function EditProfile({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="EDITAR PERFIL"
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
        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          TU NOMBRE
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          Juan Pablo Gómez
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          TU EMAIL
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          jpgomez@gmail.com
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          TU TELEFONO
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          +54 555 5555
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          TU FECHA DE NACIMIENTO
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          23/12/1987
        </Text>

        <View style={[componentStyles.blackLine, styles.mb40]} />

        <View
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            {marginBottom: 150},
          ]}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            GUARDAR CAMBIOS
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
