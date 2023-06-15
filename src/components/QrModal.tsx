import React, {useState} from 'react';
import {Text, Image, View, ScrollView, ActivityIndicator} from 'react-native';
import {fontColors} from '../styles/variables';
import PillComponent from './StatusPill';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import ModalContainer from './ModalContainer';

export default function QrCoupon({
  modalData,
  toggleModal,
  modalVisible,
}): JSX.Element {
  const [qrLoading, setQrLoading] = useState(false);

  return (
    <ModalContainer toggleModal={toggleModal} modalVisible={modalVisible}>
      <ScrollView style={componentStyles.qrModalContainer}>
        <Text
          style={[
            fonts.secondaryVeryLarge,
            fontColors.primary,
            {marginBottom: 5},
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
            <Image
              style={componentStyles.QRFormat}
              source={require('../../assets/images/qr/QR.png')}
            />
          )}
        </View>
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
      </ScrollView>
    </ModalContainer>
  );
}
