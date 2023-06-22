import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {useNavigation} from '@react-navigation/native';

export default function Success(props): JSX.Element {
  const authenticate = props.authenticate;
  const navigation = useNavigation();
  return (
    <View style={backgroundColors.secondary}>
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
          {'\n'}Hemos enviado un mail a lorem@ipsum.com para verificar tu
          correo. Por favor confirmalo para empezar.
        </Text>

        <Pressable
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            {marginBottom: 150},
          ]}
          onPress={() => authenticate(true)}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            VERIFICAR CORREO
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
