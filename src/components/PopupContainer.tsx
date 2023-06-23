import React from 'react';
import {Modal, Text, View, Pressable, Image, ScrollView} from 'react-native';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {backgroundColors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';

export default function PopUpContainer({
  togglePopUp,
  popUpVisible,
}): JSX.Element {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={popUpVisible}
      onRequestClose={() => togglePopUp(!popUpVisible)}>
      <View
        style={[
          componentStyles.backDropBlack,
          styles.horizontalPadding,
          styles.justifyC,
          styles.itemsC,
        ]}>
        <View style={[componentStyles.popupContainer]}>
          <ScrollView>
            <Image
              style={{width: 330, height: 350}}
              source={require('../../assets/images/popup_Image.png')}
            />
            <View
              style={[
                backgroundColors.quaternary,
                {paddingHorizontal: 38, paddingVertical: 33},
              ]}>
              <Text
                style={[
                  fontColors.primary,
                  fonts.secondaryMain,
                  styles.textAlignC,
                  styles.mb14,
                  fonts.lh35,
                ]}>
                titular de una noticia o evento especial
              </Text>
              <Text
                style={[
                  fontColors.primary,
                  fonts.primary,
                  styles.textAlignC,
                  styles.mb20,
                ]}>
                Lorem ipsum dolor et sim
              </Text>
              <Pressable
                style={[componentStyles.primaryButton]}
                onPress={() => togglePopUp(!popUpVisible)}>
                <Text
                  style={[
                    fonts.primarySmall,
                    styles.textAlignC,
                    fontColors.primary,
                  ]}>
                  CALL TO ACTION
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
