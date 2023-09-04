import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign, FontAwesome} from '../libs/vector-icons';
import {useSession} from '../utils/SessionProvider';
import * as api from '../services/api';
import {revokeGoogleAccess} from '../utils/GoogleAuth';

export default function DeleteAccount(props: Props): JSX.Element {
  const {idToken, setIsAuthenticated, clearSession, setHasAccess} =
    useSession();
  const [buttonLoading, setButtonLoading] = useState(false);

  const confirmDelete = () => {
    setButtonLoading(true);
    Alert.alert(
      'Cuidado!',
      '¿Esta seguro que quiere borrar su cuenta? Se perderan todos sus datos.',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            console.log('Accion cancelada');
            setButtonLoading(false);
          },
          style: 'cancel',
        },
        {
          text: 'Borrar cuenta',
          onPress: () => deleteProfile(),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const deleteProfile = async () => {
    console.log('Id token to delete: ', idToken);
    try {
      await revokeGoogleAccess();
      const response = await api.deleteAccount(idToken);
      if (!response.error) {
        clearSession();
        setIsAuthenticated(false);
        setHasAccess(false);
      } else {
        console.log('Error deleting account from server: ', response);
        setButtonLoading(false);
      }
    } catch (error) {
      setButtonLoading(false);
      console.log('Error deleting account: ', error);
    }
  };

  return (
    <SafeAreaView style={backgroundColors.secondary}>
      <HeaderSecondary
        title="Borrar cuenta"
        iconRight={
          <Pressable onPress={() => props.navigation.goBack()}>
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
        <Text
          style={[
            fonts.primaryLarge,
            fontColors.primary,
            styles.mb40,
            {textAlign: 'justify'},
          ]}>
          Borrar tu cuenta hará que no puedas iniciar sesión con tu usuario, así
          como tampoco continuar usando tus cupones:
        </Text>
        <View style={[{flexDirection: 'row'}, styles.mb20]}>
          <View
            style={[
              styles.iconStack,
              {
                width: 25,
                height: 25,
                marginEnd: 8,
              },
            ]}>
            <FontAwesome name="circle" size={25} color={colors.quaternary} />
            <AntDesign
              name="close"
              size={14}
              color={colors.primary}
              style={{position: 'absolute', zIndex: 99}}
            />
          </View>
          <Text
            style={[fonts.primarySmall, fontColors.primary, {flexShrink: 1}]}>
            Ya no podrás iniciar sesión con tu cuenta
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <View
            style={[
              styles.iconStack,
              {
                width: 25,
                height: 25,
                marginEnd: 8,
              },
            ]}>
            <FontAwesome name="circle" size={25} color={colors.quaternary} />
            <AntDesign
              name="close"
              size={14}
              color={colors.primary}
              style={{position: 'absolute', zIndex: 99}}
            />
          </View>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            Ya no podrás usar tus cupones
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb60]}>
          <View
            style={[
              styles.iconStack,
              {
                width: 25,
                height: 25,
                marginEnd: 8,
              },
            ]}>
            <FontAwesome name="circle" size={25} color={colors.quaternary} />
            <AntDesign
              name="close"
              size={14}
              color={colors.primary}
              style={{position: 'absolute', zIndex: 99}}
            />
          </View>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            Lorem ipsum dolor et sim
          </Text>
        </View>
        <Pressable
          onPress={confirmDelete}
          style={[
            componentStyles.secondaryButton,
            backgroundColors.terciary,
            {marginBottom: 150},
          ]}
          disabled={buttonLoading}>
          {buttonLoading ? (
            <ActivityIndicator size={25} color={colors.primary} />
          ) : (
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              BORRAR CUENTA
            </Text>
          )}
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
