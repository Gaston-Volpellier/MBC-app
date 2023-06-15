import React from 'react';
import {View, Text, ScrollView, TextInput, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function PasswordReset({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="RECUPERÁ TU USUARIO Y/O CONTRASEÑA"
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
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          Por favor ingresá el código que te enviamos por e-mail:
        </Text>

        <View>
          <TextInput />
        </View>

        <Pressable
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            {marginBottom: 150},
          ]}
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
