import React from 'react';
import {SafeAreaView, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import RecoveryCodeForm from '../components/form/RecoveryCodeForm';

export default function RecoveryCode({navigation}: Props): JSX.Element {
  return (
    <SafeAreaView style={[backgroundColors.secondary, {flex: 1}]}>
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
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          Por favor ingresá el código que te enviamos por e-mail:
        </Text>

        <RecoveryCodeForm navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
