import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';

export default function PasswordReset({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="CREÁ TU NUEVA CONTRASEÑA"
        iconRight={
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="closecircle"
              size={35}
              color={colors.terciary}
              style={componentStyles.IconSizeRegular}
            />
          </Pressable>
        }
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
        <View style={[componentStyles.blackLine, styles.mb14]} />

        <View style={[styles.mb20]}>
          <Text style={[fonts.primary12, fontColors.primary]}>
            Debe tener entre 8 y 12 caracteres
          </Text>
          <Text style={[fonts.primary12, fontColors.primary]}>
            Debe incluir minúsculas y mayúsculas
          </Text>
        </View>

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
