import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {fontColors} from '../styles/variables';
import PillComponent from './StatusPill';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import ModalContainer from './ModalContainer';
import {useNavigation} from '@react-navigation/native';

export default function QrCoupon(props): JSX.Element {
  const [qrLoading, setQrLoading] = useState(false);
  const navigation = useNavigation();

  const modalData = props.modalData;
  const status = props.modalData.status;

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
          <ActivityIndicator
            size={64}
            style={componentStyles.QRFormat}
            color="gray"
          />
        ) : (
          <View>
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
          </View>
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
          <View style={[styles.mb10, {flexGrow: 0}]}>
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
