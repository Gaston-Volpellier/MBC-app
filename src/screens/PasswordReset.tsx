import React from 'react';
import {SafeAreaView, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import NewPasswordForm from '../components/form/NewPasswordForm';

export default function PasswordReset({navigation}: Props): JSX.Element {
  return (
    <SafeAreaView style={backgroundColors.secondary}>
      <HeaderSecondary
        title="CREÁ TU NUEVA CONTRASEÑA"
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
        <NewPasswordForm />
      </ScrollView>
    </SafeAreaView>
  );
}
