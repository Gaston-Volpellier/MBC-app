import React from 'react';
import {SafeAreaView, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function Success({route, navigation}): JSX.Element {
  const email = route.params.email;

  return (
    <SafeAreaView style={backgroundColors.secondary}>
      <HeaderSecondary title="¡REGISTRO EXITOSO!" />
      <ScrollView
        style={[
          componentStyles.mainContainer,
          styles.horizontalPadding,
          backgroundColors.secondary,
        ]}>
        <Text
          style={[
            fonts.primary,
            fontColors.primary,
            styles.mb20,
            styles.textAlignC,
          ]}>
          Tu cuenta ha sido creada con éxito.{'\n'}
          {'\n'}Hemos enviado un mail a {email} para verificar tu correo. Por
          favor confirmalo para empezar.
        </Text>

        <Pressable
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            {marginBottom: 150},
          ]}
          onPress={() => navigation.navigate('Login')}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            VERIFICAR CORREO
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
