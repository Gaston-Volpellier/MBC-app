import React from 'react';
import {Image, View, Text, Pressable, ScrollView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';

export default function Login({authenticate}): JSX.Element {
  return (
    <ScrollView
      style={[componentStyles.mainContainer, styles.horizontalPadding]}>
      <View style={styles.loginSection}>
        <View style={styles.centerContainer}>
          <Image
            style={[styles.mainLogo, styles.loginLogo]}
            source={require('../../assets/images/MBC_logo.png')}
          />
        </View>
      </View>
      <View style={styles.loginSection}>
        <Text style={[fonts.secondaryMain, fontColors.primary]}>
          BIENVENID@ AL PARAÍSO DE LA BIRRA, LOS TRAGOS Y LA RICA COMIDA 🙌🏻
        </Text>
      </View>
      <View style={styles.loginSection}>
        <Text style={[fonts.primary, fontColors.primary]}>
          Accedé a descuentos exclusivos para usuari@s de nuestra App.
        </Text>
      </View>
      <View style={styles.loginSection}>
        <Pressable
          style={componentStyles.whiteButton}
          onPress={() => authenticate(true)}>
          <Text style={[fonts.primarySmall, fontColors.primary]}>
            CONTINUÁ CON GOOGLE
          </Text>
        </Pressable>
        <Pressable
          style={[componentStyles.secondaryButton, backgroundColors.primary]}>
          <Text style={[fonts.primarySmall, fontColors.secondary]}>
            REGISTRATE CON TU MAIL
          </Text>
        </Pressable>
      </View>
      <View style={styles.loginSection}>
        <Text
          style={[fonts.primary, fontColors.primary, styles.paddingRegular]}>
          ¿Ya tenes una cuenta?
        </Text>
        <Pressable style={[componentStyles.primaryButton]}>
          <Text style={[fonts.primarySmall, fontColors.primary]}>
            INICIÁ SESIÓN
          </Text>
        </Pressable>
      </View>
      <View style={styles.loginSection}>
        <Pressable style={styles.pressableText}>
          <Text style={[fonts.primary, fontColors.primary, fonts.underlined]}>
            Lo haré luego
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
