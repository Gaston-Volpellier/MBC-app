import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';

export default function DeleteAccount(props, {navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="Borrar cuenta"
        iconPrimary="close-o"
        iconSecondary=""
      />
      <ScrollView
        style={[
          componentStyles.mainContainer,
          styles.horizontalPadding,
          backgroundColors.secondary,
        ]}>
        <Text
          style={[
            fonts.primaryLarge,
            fontColors.primary,
            styles.mb40,
            {textAlign: 'justify'},
          ]}>
          Borrar tu cuenta hará que no puedas iniciar sesión con tu usuario, así
          como tampoco continuar usando tus cupones:
        </Text>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <AntDesign
            name="closecircle"
            size={20}
            color={colors.quaternary}
            style={{marginEnd: 12}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            Ya no podrás iniciar sesión con tu cuenta
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <AntDesign
            name="closecircle"
            size={20}
            color={colors.quaternary}
            style={{marginEnd: 12}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            Ya no podrás usar tus cupones
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <AntDesign
            name="closecircle"
            size={20}
            color={colors.quaternary}
            style={{marginEnd: 12}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            Lorem ipsum dolor et sim
          </Text>
        </View>
        <View
          style={[
            componentStyles.secondaryButton,
            backgroundColors.terciary,
            {marginBottom: 150},
          ]}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            BORRAR CUENTA
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
