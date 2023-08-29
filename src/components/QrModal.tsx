import React, {useState} from 'react';
import {Text, Image, View, ScrollView, Pressable} from 'react-native';
import {fontColors} from '../styles/variables';
import PillComponent from './StatusPill';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {useNavigation} from '@react-navigation/native';
import Spinner from './Spinner';

export default function QrCoupon(props): JSX.Element {
  const [qrLoading, setQrLoading] = useState(false);
  const navigation = useNavigation();

  const modalData = props.modalData;
  const status = props.modalData.status;

  // for testing purposes
  const useCoupon = () => {
    if (status === 1) {
      setQrLoading(true);
      //Validate coupon on the api
    }
  };

  return (
    <ScrollView style={componentStyles.qrModalContainer}>
      <Text
        style={[
          fonts.secondaryVeryLarge,
          fontColors.primary,
          {marginBottom: 5, lineHeight: 50},
        ]}>
        {modalData.title}
      </Text>
      <Text
        style={[
          fonts.primarySmall,
          styles.textAlignC,
          fontColors.primary,
          styles.mb10,
        ]}>
        MOSTRÁ ESTE CÓDIGO EN CAJA PARA ACTIVAR EL BENEFICIO
      </Text>
      <Text
        style={[
          fonts.primarySmaller,
          fontColors.primary,
          styles.mb14,
          {textAlign: 'center'},
        ]}>
        {modalData.number}
      </Text>
      <View style={[componentStyles.QRContainer]}>
        {qrLoading ? (
          <Spinner />
        ) : (
          <Pressable onPress={useCoupon}>
            <Image
              style={componentStyles.QRFormat}
              source={require('../../assets/images/qr/QR.png')}
              blurRadius={status === 2 ? 3 : 0}
            />
            {status === 2 ? (
              <View style={[componentStyles.cardThumbnailCentral]}>
                <PillComponent status={2} />
              </View>
            ) : null}
          </Pressable>
        )}
      </View>

      {status === 2 ? (
        <View>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.danger,
              styles.mb20,
            ]}>
            CUPÓN VENCIDO
          </Text>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.primary,
              styles.mb20,
            ]}>
            Este cupón se encuentra vencido o ya fue usado.
          </Text>
          <Pressable onPress={() => navigation.navigate('Offers')}>
            <Text
              style={[
                fonts.primary,
                styles.textAlignC,
                fontColors.primary,
                fonts.underlined,
                styles.mb30,
              ]}>
              Buscá nuevas ofertas
            </Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.primary,
              styles.mb20,
            ]}>
            VÁLIDO POR 24 HS
          </Text>
          <View style={[styles.mb10, styles.centerContainer]}>
            <PillComponent status={1} />
          </View>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.primary,
              styles.mb10,
            ]}>
            {modalData.expiration}
          </Text>
        </View>
      )}
    </ScrollView>
  );
}
