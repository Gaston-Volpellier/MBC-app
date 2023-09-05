import React, {useState} from 'react';
import {Pressable, Text, Image, View, ActivityIndicator} from 'react-native';
import {backgroundColors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import ModalContainer from './ModalContainer';
import styles from '../styles/styles';
import {useSession} from '../utils/SessionProvider';
import {GoogleSingUp} from '../utils/GoogleAuth';
import {googleLogin} from '../services/api';

export default function LoginModal(): JSX.Element {
  const {
    setIsAuthenticated,
    loginModalVisible,
    setLoginModalVisible,
    setHasAccess,
    storeUserData,
    setIsAdmin,
  } = useSession();

  const [googleLoginError, setGoogleLoginError] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const signInWithGoogle = async () => {
    setButtonLoading(true);
    setGoogleLoginError(null);

    try {
      const googleResponse = await GoogleSingUp();
      const apiResponse = await googleLogin(
        googleResponse.idToken,
        googleResponse.user.email,
      );

      if (!apiResponse.error) {
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
          0,
        );
        setIsAdmin(0);
        setIsAuthenticated(true);
        setHasAccess(true);
        setLoginModalVisible(false);
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
    <ModalContainer
      toggleModal={setLoginModalVisible}
      modalVisible={loginModalVisible}>
      <View>
        <Text
          style={[
            fonts.primarySmall,
            styles.textAlignC,
            fontColors.primary,
            styles.mb30,
          ]}>
          Accedé para ver {'\n'}o editar tu perfil
        </Text>
        <View>
          <View>
            <Pressable
              style={[
                componentStyles.whiteButton,
                styles.mb10,
                styles.horizontalAlignAlt,
              ]}
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
            onPress={() => (setLoginModalVisible(false), setHasAccess(false))}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.secondary,
              ]}>
              CONTINUÁ CON TU EMAIL
            </Text>
          </Pressable>
        </View>
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.primary,
            styles.mb14,
          ]}>
          ¿Ya tenes una cuenta?
        </Text>
        <Pressable
          style={[componentStyles.primaryButton, backgroundColors.quaternary]}
          onPress={() => (setLoginModalVisible(false), setHasAccess(false))}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            INICIÁ SESIÓN
          </Text>
        </Pressable>
      </View>
    </ModalContainer>
  );
}
