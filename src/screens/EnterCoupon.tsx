import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import {useSession} from '../utils/SessionProvider';
import * as api from '../services/api';
import Spinner from '../components/Spinner';

export default function EnterCoupon(props): JSX.Element {
  const {idToken, setScannedCoupon} = useSession();
  const [processingCoupon, setProcessingCoupon] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coupon, setCoupon] = useState('');

  const handleCoupon = async () => {
    setErrorMsg(null);

    try {
      setProcessingCoupon(true);
      const response = await api.scanCoupon(idToken, coupon);

      console.log('Response ', response);
      if (!response.error) {
        console.log('Response cupon: ', response.cupon);
        console.log('Response promocion: ', response.promocion);

        const couponData = {
          code: response.cupon.codigo,
          detail: response.promocion.descripcion,
          extract: response.promocion.extracto,
          title: response.promocion.titulo,
          validity: response.promocion.validez,
        };

        setScannedCoupon(couponData);
        props.navigation.navigate('CashierCoupon');
        setProcessingCoupon(false);
      } else {
        setProcessingCoupon(false);
        setErrorMsg(response.error);
        console.log('Coupon scanned error: ', response.error);
      }
    } catch (error) {
      setProcessingCoupon(false);
      console.log('Error escaneando cupon.', error);
    }
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
      <ScrollView style={{flex: 1}}>
        <View style={[componentStyles.mainContainer, styles.horizontalPadding]}>
          <Text
            style={[
              fonts.primary,
              fontColors.secondary,
              styles.textAlignC,
              styles.mb14,
            ]}>
            Ingrese el codigo de promocion:
          </Text>
          <View style={[styles.mb20, styles.itemsC]}>
            {processingCoupon ? (
              <View style={{minHeight: 80}}>
                <Spinner />
              </View>
            ) : (
              <View style={[styles.horizontalAlign, {minHeight: 80}]}>
                <TextInput
                  style={[
                    fontColors.primary,
                    backgroundColors.secondary,
                    fonts.primary,
                    styles.mb10,
                    styles.w100,
                    componentStyles.qrInput,
                    {maxWidth: 350},
                  ]}
                  placeholder="NXCZT"
                  placeholderTextColor={colors.lightGray}
                  autoCapitalize={'characters'}
                  onChangeText={setCoupon}
                  value={coupon}
                />
              </View>
            )}

            <Pressable
              style={[
                componentStyles.secondaryButton,
                styles.horizontalPadding,
                backgroundColors.terciary,
                styles.mb20,
              ]}
              onPress={() => handleCoupon()}>
              <Text
                style={[
                  fonts.primarySmall,
                  styles.textAlignC,
                  fontColors.primary,
                  {textTransform: 'uppercase'},
                ]}>
                Validar codigo
              </Text>
            </Pressable>
            {errorMsg && (
              <View
                style={[
                  styles.horizontalAlign,
                  styles.horizontalPadding,
                  styles.mb20,
                ]}>
                <Text style={[fontColors.secondary, fonts.primarySmall]}>
                  Error:{'\n'}
                  <Text style={[fontColors.danger, fonts.primarySmall]}>
                    {errorMsg}
                  </Text>
                </Text>
              </View>
            )}
          </View>
          <View style={[{flex: 1, justifyContent: 'flex-end', minHeight: 200}]}>
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
                Escanear con QR
              </Text>
            </Pressable>
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
                  {textTransform: 'uppercase'},
                ]}>
                Volver
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
