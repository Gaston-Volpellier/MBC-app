import React, {useEffect, useState} from 'react';
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
import * as api from '../services/api';

export default function CashierCoupon(props): JSX.Element {
  const [scanResult, setScanResult] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const {idToken, logout, scannedCoupon} = useSession();

  const validate = async () => {
    const couponCode = scannedCoupon.code;

    try {
      const response = await api.validateCoupon(idToken, couponCode);
      if (!response.error) {
        console.log('Coupon: ', response.cupon);
        setScanResult(1);
      } else {
        setScanResult(2);
        setErrorMsg(response.error);
        console.log('Error validando el cupon: ', response.error);
      }
    } catch (error) {
      console.log('Error al intentar validar en el servidor: ', error);
    }
  };

  const qrImage =
    scanResult == 1
      ? require(`../../assets/images/QR_icon_success.png`)
      : require(`../../assets/images/QR_icon_danger.png`);

  const title = scannedCoupon.title;
  const description = 'LUNES A JUEVES DE 18 A 20 HS';
  const legal = scannedCoupon.detail;

  return (
    <SafeAreaView
      style={[
        backgroundColors.primary,
        styles.horizontalPadding,
        {paddingTop: 30, flex: 1},
      ]}>
      <View style={[styles.centerContainer, styles.mb30]}>
        <Image
          source={require('../../assets/images/MBC_logo_white.png')}
          style={{width: 120, height: 65}}
        />
      </View>
      <ScrollView style={{marginBottom: 80}}>
        <View style={[componentStyles.mainContainer]}>
          <View
            style={[
              styles.borderRadiusTop,
              scanResult == 0
                ? backgroundColors.lightGray
                : scanResult == 1
                ? backgroundColors.succsess
                : backgroundColors.danger,
            ]}>
            <Text
              style={[
                scanResult == 0 ? fontColors.primary : fontColors.secondary,
                fonts.primary12,
                styles.textAlignC,
                styles.paddingRegular,
              ]}>
              RESULTADO DEL CÓDIGO ESCANEADO
            </Text>
          </View>
          <View
            style={[
              styles.horizontalPadding,
              styles.mb30,
              backgroundColors.secondary,
              {
                paddingTop: 29,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              },
            ]}>
            <Text
              style={[
                fonts.secondary50,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              {title}
            </Text>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
                styles.mb30,
              ]}>
              {description}
            </Text>
            {scanResult == 0 ? (
              <View>
                <Text
                  style={[
                    fonts.primarySmall,
                    fontColors.primary,
                    styles.mb40,
                    styles.textAlignC,
                  ]}>
                  {legal}
                </Text>
                <Pressable
                  style={[
                    componentStyles.secondaryButton,
                    backgroundColors.quaternary,
                    styles.mb10,
                  ]}
                  onPress={() => validate()}>
                  <Text
                    style={[
                      fonts.primarySmall,
                      styles.textAlignC,
                      fontColors.primary,
                      {textTransform: 'uppercase'},
                    ]}>
                    VALIDAR CUPÓN
                  </Text>
                </Pressable>
              </View>
            ) : (
              <View style={styles.mb20}>
                <Image
                  style={[
                    styles.mb20,
                    {alignSelf: 'center', height: 84, width: 84},
                  ]}
                  source={qrImage}
                />
                <Text
                  style={[
                    fonts.primary,
                    styles.textAlignC,
                    fontColors.primary,
                    styles.mb10,
                  ]}>
                  {scanResult == 1 ? 'CUPÓN VALIDADO EXITOSAMENTE' : null}
                </Text>
                {scanResult == 2 ? (
                  <Text
                    style={[
                      fontColors.danger,
                      styles.textAlignC,
                      fonts.primary,
                    ]}>
                    {errorMsg}
                  </Text>
                ) : null}
              </View>
            )}
            <Pressable
              style={[
                componentStyles.primaryButton,
                backgroundColors.secondary,
                styles.mb10,
              ]}
              onPress={() => props.navigation.navigate('AdminView')}>
              <Text
                style={[
                  fonts.primarySmall,
                  styles.textAlignC,
                  fontColors.primary,
                ]}>
                {scanResult == 0
                  ? 'VOLVER A ESCANEAR'
                  : 'ESCANEAR NUEVO CODIGO'}
              </Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('AdminView')}>
              <Text
                style={[
                  fonts.primary,
                  styles.textAlignC,
                  fontColors.primary,
                  fonts.underlined,
                  styles.mb30,
                ]}>
                Ir al inicio
              </Text>
            </Pressable>
          </View>
          <View>
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
              onPress={() => logout()}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
