import React from 'react';
import {Image, View, Text, Pressable, ScrollView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';
import {useNavigation} from '@react-navigation/native';

export default function Login(props): JSX.Element {
  const authenticate = props.authenticate;
  const navigation = useNavigation();

  return (
    <ScrollView
      style={[
        componentStyles.mainContainer,
        backgroundColors.quaternary,
        styles.horizontalPadding,
      ]}>
      <View style={styles.loginSection}>
        <View style={styles.centerContainer}>
          <Image
            style={[styles.mainLogo, styles.loginLogo]}
            source={require('../../assets/images/MBC_logo.png')}
          />
        </View>
      </View>
      <View style={styles.loginSection}>
        <Text
          style={[fonts.secondaryMain, fontColors.primary, styles.textAlignC]}>
          BIENVENID@ AL PARAÍSO DE LA BIRRA, LOS TRAGOS Y LA RICA COMIDA 🙌🏻
        </Text>
      </View>
      <View style={styles.loginSection}>
        <Text style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
          Accedé a descuentos exclusivos para usuari@s de nuestra App.
        </Text>
      </View>
      <View style={styles.loginSection}>
        <Pressable
          style={[componentStyles.whiteButton, styles.horizontalAlignAlt]}
          onPress={() => authenticate(true)}>
          <Image
            source={require('../../assets/images/Google_logo.png')}
            style={{height: 25, width: 25}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            CONTINUÁ CON GOOGLE
          </Text>
        </Pressable>
        <Pressable
          style={[componentStyles.secondaryButton, backgroundColors.primary]}
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={[
              fonts.primarySmall,
              styles.textAlignC,
              fontColors.secondary,
            ]}>
            REGISTRATE CON TU MAIL
          </Text>
        </Pressable>
      </View>
      <View style={styles.loginSection}>
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.primary,
            styles.paddingRegular,
          ]}>
          ¿Ya tenes una cuenta?
        </Text>
        <Pressable
          style={[componentStyles.primaryButton]}
          onPress={() => navigation.navigate('Access')}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            INICIÁ SESIÓN
          </Text>
        </Pressable>
      </View>
      <View style={styles.loginSection}>
        <Pressable style={styles.pressableText}>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.primary,
              fonts.underlined,
            ]}>
            Lo haré luego
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
