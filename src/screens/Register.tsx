import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function Register({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="REGISTRATE"
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
          juan@lopez.com
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
          TU E-MAIL
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          ***********
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
          FECHA DE NACIMIENTO
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          ***********
        </Text>
        <Text>Debes tener al menos 18 años para ingresar</Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
          CONTRASEÑA
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

        <Pressable
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            {marginTop: 'auto', marginBottom: 150},
          ]}
          onPress={() => navigation.navigate('Success')}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            Registrate
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
