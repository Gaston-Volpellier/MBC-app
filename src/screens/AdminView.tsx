import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import {MaterialCommunityIcons} from '../libs/vector-icons';
import {useSession} from '../utils/SessionProvider';
import {useNavigation} from '@react-navigation/native';
import RNRestart from 'react-native-restart';

export default function AdminView(props): JSX.Element {
  const {logout, userName} = useSession();

  //Reemplazar por la version del Figma.
  const qrImage = require(`../../assets/images/QR_icon_success.png`);

  const processLogout = async () => {
    await logout();
    RNRestart.restart();
  };

  return (
    <SafeAreaView
      style={[
        backgroundColors.primary,
        styles.horizontalPadding,
        {paddingTop: 30, flex: 1},
      ]}>
      <View style={[styles.centerContainer, styles.mb40]}>
        <Image
          source={require('../../assets/images/MBC_logo_white.png')}
          style={{width: 120, height: 65}}
        />
      </View>
      <ScrollView>
        <View style={[componentStyles.mainContainer, styles.mb60]}>
          <View style={styles.mb60}>
            <Text
              style={[
                fonts.secondaryMain,
                fontColors.secondary,
                styles.textAlignC,
                styles.w100,
              ]}>
              {`BIENVENID@ ${userName}`}
            </Text>
          </View>
          <View>
            <Image
              style={[
                styles.mb40,
                {
                  alignSelf: 'center',
                  height: 100,
                  width: 100,
                  tintColor: colors.darkGray,
                },
              ]}
              source={qrImage}
            />
          </View>

          <View>
            <Text
              style={[
                fontColors.secondary,
                fonts.primary,
                styles.textAlignC,
                styles.w100,
                styles.mb30,
                styles.horizontalPadding,
              ]}>
              Ya podés empezar a validar códigos escaneando el QR que te
              mostrará el cliente.
            </Text>
          </View>
          <View style={styles.itemsC}>
            <Pressable
              style={[
                componentStyles.secondaryButton,
                styles.horizontalPadding,
                backgroundColors.quaternary,
                styles.mb20,
              ]}
              onPress={() => props.navigation.navigate('ScanCoupon')}>
              <Text
                style={[
                  fonts.primarySmall,
                  styles.textAlignC,
                  fontColors.primary,
                  {textTransform: 'uppercase'},
                ]}>
                ESCANEAR CÓDIGO QR
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={[
              styles.mb30,
              styles.centerContainer,
              {
                justifyContent: 'center',
                flexDirection: 'row',
                flex: 1,
              },
            ]}
            onPress={() => processLogout()} >
            <MaterialCommunityIcons
              name="logout-variant"
              size={18}
              color={colors.secondary}
              style={{marginEnd: 15}}
            />
            <Text
              style={[fonts.primary, fontColors.secondary, fonts.underlined]}>
              Cerrar sesion
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
