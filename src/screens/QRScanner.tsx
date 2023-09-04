import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Text} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import {fontColors} from '../styles/variables';

export default function QRScanner(props) {
  return (
    <QRCodeScanner
      onRead={e => props.readQR(e)}
      permissionDialogTitle={'Debe darle permisos a la camara del celular'}
      fadeIn={true}
      cameraContainerStyle={{
        width: 275,
        borderWidth: 1,
        borderColor: 'white',
        alignSelf: 'center',
      }}
      cameraStyle={{width: '99%', alignSelf: 'center'}}
      notAuthorizedView={
        <Text
          style={[
            fonts.primary,
            fontColors.secondary,
            styles.textAlignC,
            styles.mb14,
          ]}>
          La aplicacion no tiene permisos para la camara en este dispositivo,
          debe otorgar permisos desde opciones.
        </Text>
      }
    />
  );
}
