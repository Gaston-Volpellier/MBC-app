import React from 'react';
import {
  Image,
  View,
  ActivityIndicator,
  Button,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';

export default function Logging({navigation}): JSX.Element {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.loggingSection}>
        <View style={styles.centerContainer}>
          <Image
            style={[styles.mainLogo, styles.loggingLogo]}
            source={require('../../assets/images/MBC_logo.png')}
          />
        </View>
      </View>
      <View style={styles.loggingSection}>
        <Text style={fonts.mainFont}>
          BIENVENID@ AL PARAÍSO DE LA BIRRA, LOS TRAGOS Y LA RICA COMIDA 🙌🏻
        </Text>
      </View>
      <View style={styles.loggingSection}>
        <Text style={fonts.primaryFont}>
          Accedé a descuentos exclusivos para usuari@s de nuestra App.
        </Text>
      </View>
      <View style={styles.loggingSection}>
        <Pressable
          style={componentStyles.whiteButton}
          onPress={() => {
            navigation.navigate('Home', {name: 'Home'});
          }}>
          <Text style={fonts.primaryFont}>CONTINUÁ CON GOOGLE</Text>
        </Pressable>
        <Pressable style={componentStyles.secondaryButton}>
          <Text style={fonts.primaryWhiteFont}>REGISTRATE CON TU MAIL</Text>
        </Pressable>
      </View>
      <View style={styles.loggingSection}>
        <Text style={[fonts.primaryFont, componentStyles.paddingRegular]}>
          ¿Ya tenes una cuenta?
        </Text>
        <Pressable style={componentStyles.primaryButton}>
          <Text style={fonts.primaryFont}>INICIÁ SESIÓN</Text>
        </Pressable>
      </View>
      <View style={styles.loggingSection}>
        <Pressable style={styles.pressableText}>
          <Text style={[fonts.primaryFont, fonts.underlined]}>
            Lo haré luego
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
