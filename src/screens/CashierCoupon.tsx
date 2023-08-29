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

export default function CashierCoupon(props): JSX.Element {
  const [couponState, setCouponState] = useState(0);
  const {logout} = useSession();

  const qrImage =
    couponState == 1
      ? require(`../../assets/images/QR_icon_success.png`)
      : require(`../../assets/images/QR_icon_danger.png`);

  const title = '2X1 EN IPA';
  const description = 'LUNES A JUEVES DE 18 A 20 HS';
  const legal =
    'Este es un espacio de texto para legales o cualquier tipo de información importante que el cajero o cajera deba tener';
  const error =
    'Este código ya fue utilizado el 12/6/2023 a las 19.43 hs en el local MBC Carrasco.';

  return (
    <SafeAreaView
      style={[
        backgroundColors.primary,
        styles.horizontalPadding,
        {paddingTop: 30},
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
              couponState == 0
                ? backgroundColors.lightGray
                : couponState == 1
                ? backgroundColors.succsess
                : backgroundColors.danger,
            ]}>
            <Text
              style={[
                couponState == 0 ? fontColors.primary : fontColors.secondary,
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
            {couponState == 0 ? (
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
                  onPress={() => setCouponState(2)}>
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
                  {couponState == 1
                    ? 'CUPÓN VALIDADO EXITOSAMENTE'
                    : 'ERROR AL ESCANEAR EL CUPÓN'}
                </Text>
                {couponState == 2 ? (
                  <Text
                    style={[
                      fontColors.danger,
                      styles.textAlignC,
                      fonts.primary,
                    ]}>
                    {error}
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
              onPress={() => {
                couponState == 0 ? setCouponState(1) : setCouponState(0);
              }}>
              <Text
                style={[
                  fonts.primarySmall,
                  styles.textAlignC,
                  fontColors.primary,
                ]}>
                {couponState == 0
                  ? 'VOLVER A ESCANEAR'
                  : 'ESCANEAR NUEVO CODIGO'}
              </Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate('Login')}>
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
