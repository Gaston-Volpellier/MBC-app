import React from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import RecoveryForm from '../components/form/RecoveryForm';

export default function Recovery({navigation}: Props): JSX.Element {
  return (
    <SafeAreaView style={backgroundColors.secondary}>
      <HeaderSecondary
        title="RECUPERÁ TU USUARIO Y/O CONTRASEÑA"
        iconRight={
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="closecircle"
              size={34}
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
        <Text style={[fonts.primary, fontColors.primary, styles.mb20]}>
          Por favor ingresá tu E-Mail. Te enviaremos un código para recuperar tu
          contraseña.
        </Text>

        <RecoveryForm navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
