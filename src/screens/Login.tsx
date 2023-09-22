import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';
import {useNavigation} from '@react-navigation/native';
import {GoogleSingUp} from '../utils/GoogleAuth';
import {useSession} from '../utils/SessionProvider';
import {googleLogin} from '../services/api';

export default function Login(props): JSX.Element {
  const {setIsAuthenticated, setHasAccess, storeUserData, setIsAdmin} =
    useSession();
  const [googleLoginError, setGoogleLoginError] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const navigation = useNavigation();

  const signInWithGoogle = async () => {
    setButtonLoading(true);
    setGoogleLoginError(null);

    try {
      const googleResponse = await GoogleSingUp();
      //Devolver solo el usuario de google y despues llamar a la api desde aca
      const apiResponse = await googleLogin(
        googleResponse.idToken,
        googleResponse.user.email,
      );
      console.log('API object', apiResponse);

      if (!apiResponse.error) {
        let parts = apiResponse.usuario.fecha_nacimiento ? apiResponse.usuario.fecha_nacimiento.split('-') : [];
        if (parts.length == 3) apiResponse.usuario.fecha_nacimiento = parts.reverse().join('/');

        await storeUserData(
          apiResponse.token,
          apiResponse.usuario.nombre,
          apiResponse.usuario.email,
          apiResponse.usuario.fecha_nacimiento,
          apiResponse.usuario.telefono,
          apiResponse.usuario.google_id,
          apiResponse.usuario.not_email,
          apiResponse.usuario.not_push,
          googleResponse.user.photo,
        );
        setIsAdmin(0);

        setIsAuthenticated(true);
        setHasAccess(true);
      } else {
        console.log('error logging in: ', googleResponse);
        setGoogleLoginError(googleResponse.msg);
        setButtonLoading(false);
      }
    } catch (error) {
      setButtonLoading(false);
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={[
          componentStyles.mainContainer,
          backgroundColors.quaternary,
          styles.horizontalPadding,
        ]}>
        <View style={[styles.mb30, {marginTop: 50}]}>
          <View style={styles.centerContainer}>
            <Image
              style={[styles.mainLogo]}
              source={require('../../assets/images/MBC_logo.png')}
            />
          </View>
        </View>
        <View style={styles.mb30}>
          <Text
            style={[
              fonts.secondaryMain,
              fontColors.primary,
              styles.textAlignC,
              styles.w100,
            ]}>
            BIENVENID@ AL PARAÍSO DE LA BIRRA, LOS TRAGOS Y LA RICA COMIDA 🙌🏻
          </Text>
        </View>
        <View style={styles.mb30}>
          <Text style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
            Accedé a descuentos exclusivos para usuari@s de nuestra App.
          </Text>
        </View>
        <View style={[styles.mb30, styles.itemsC]}>
          <View style={[styles.mb10, styles.w100, {alignItems: 'center'}]}>
            <Pressable
              style={[componentStyles.whiteButton]}
              onPress={signInWithGoogle}
              disabled={buttonLoading}>
              {buttonLoading ? (
                <ActivityIndicator size={25} />
              ) : (
                <View style={[styles.horizontalAlignAlt]}>
                  <Image
                    source={require('../../assets/images/Google_logo.png')}
                    style={{height: 25, width: 25, marginEnd: 10}}
                  />
                  <Text
                    style={[
                      fonts.primarySmall,
                      styles.textAlignC,
                      fontColors.primary,
                    ]}>
                    CONTINUÁ CON GOOGLE
                  </Text>
                </View>
              )}
            </Pressable>
            {googleLoginError && (
              <View style={[styles.horizontalAlign, styles.horizontalPadding]}>
                <Text
                  style={[fontColors.danger, fonts.primarySmall, styles.mb10]}>
                  {googleLoginError}
                </Text>
              </View>
            )}
          </View>
          <Pressable
            style={[componentStyles.secondaryButton, backgroundColors.primary]}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.secondary,
              ]}>
              REGISTRATE CON TU EMAIL
            </Text>
          </Pressable>
        </View>
        <View style={[styles.mb30, styles.itemsC]}>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.primary,
              {paddingBottom: 14},
            ]}>
            ¿Ya tenes una cuenta?
          </Text>
          <Pressable
            style={[componentStyles.primaryButton, backgroundColors.quaternary]}
            onPress={() => navigation.navigate('Access')}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              INICIÁ SESIÓN
            </Text>
          </Pressable>
        </View>
        <View style={styles.mb30}>
          <Pressable
            style={styles.pressableText}
            onPress={() => setHasAccess(true)}>
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
    </SafeAreaView>
  );
}
