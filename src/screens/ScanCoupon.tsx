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
import QRScanner from './QRScanner';
import {useSession} from '../utils/SessionProvider';
import * as api from '../services/api';
import Spinner from '../components/Spinner';

export default function ScanCoupon(props): JSX.Element {
  const {idToken, setScannedCoupon} = useSession();
  const [scanningCoupon, setScanningCoupon] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const readQR = async e => {
    setErrorMsg(null);

    try {
      setScanningCoupon(true);
      const response = await api.scanCoupon(idToken, e.data);

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
        setScanningCoupon(false);
      } else {
        setScanningCoupon(false);
        setErrorMsg(response.error);
        console.log('Coupon scanned error: ', response.error);
      }
    } catch (error) {
      setScanningCoupon(false);
      console.log('Error escaneando cupon.', error);
    }
  };

  return (
    <SafeAreaView
      style={[
        backgroundColors.primary,
        styles.horizontalPadding,
        {paddingTop: 30, height: '100%'},
      ]}>
      <View style={[styles.centerContainer, styles.mb60]}>
        <Image
          source={require('../../assets/images/MBC_logo_white.png')}
          style={{width: 120, height: 65}}
        />
      </View>
      <ScrollView>
        <View
          style={[
            componentStyles.mainContainer,
            styles.mb30,
            styles.horizontalPadding,
          ]}>
          <Text
            style={[
              fonts.primary,
              fontColors.secondary,
              styles.textAlignC,
              styles.mb14,
            ]}>
            Enfoque el codigo de promocion con la camara.
          </Text>
          <View
            style={[
              styles.mb10,
              {
                minWidth: 275,
                minHeight: 370,
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
              },
            ]}>
            {scanningCoupon ? <Spinner /> : <QRScanner readQR={readQR} />}
          </View>
          {errorMsg && (
            <View
              style={[
                styles.horizontalAlign,
                styles.horizontalPadding,
                styles.mb20,
              ]}>
              <Text style={[fontColors.secondary, fonts.primarySmall]}>
                Escaneo incorrecto:{'\n'}
                <Text style={[fontColors.danger, fonts.primarySmall]}>
                  {errorMsg}
                </Text>
              </Text>
            </View>
          )}
          <Pressable
            style={[
              componentStyles.secondaryButton,
              styles.horizontalPadding,
              backgroundColors.quaternary,
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
      </ScrollView>
    </SafeAreaView>
  );
}
