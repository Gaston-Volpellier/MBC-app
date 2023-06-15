import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {backgroundColors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import ModalContainer from './ModalContainer';
import styles from '../styles/styles';

export default function LoginModal({toggleModal, modalVisible}): JSX.Element {
  return (
    <ModalContainer toggleModal={toggleModal} modalVisible={modalVisible}>
      <View>
        <Text
          style={[
            fonts.primarySmall,
            styles.textAlignC,
            fontColors.primary,
            styles.mb30,
          ]}>
          Accedé para ver o editar tu perfil
        </Text>
        <View style={styles.loginSection}>
          <Pressable
            style={componentStyles.whiteButton}
            // onPress={() => authenticate(true)}
          >
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              CONTINUÁ CON GOOGLE
            </Text>
          </Pressable>
          <Pressable
            style={[componentStyles.secondaryButton, backgroundColors.primary]}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.secondary,
              ]}>
              CONTINUÁ CON TU EMAIL
            </Text>
          </Pressable>
        </View>
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.primary,
            styles.mb14,
          ]}>
          ¿Ya tenes una cuenta?
        </Text>
        <Pressable style={[componentStyles.primaryButton]}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            INICIÁ SESIÓN
          </Text>
        </Pressable>
      </View>
    </ModalContainer>
  );
}
