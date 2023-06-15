import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function Recovery({navigation}: Props): JSX.Element {
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

        <View style={{marginTop: 'auto', marginBottom: 150}}>
          <Pressable
            style={[
              componentStyles.secondaryButton,
              backgroundColors.quaternary,
            ]}
            onPress={() => navigation.navigate('RecoveryCode')}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              CONTINUAR
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
