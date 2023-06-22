import React from 'react';
import {Modal, Text, View, Pressable, Image, ScrollView} from 'react-native';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {MaterialCommunityIcons} from '../libs/vector-icons';

export default function InternalOffer({
  toggleOffer,
  offerVisible,
}): JSX.Element {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={offerVisible}
      onRequestClose={() => toggleOffer(!offerVisible)}>
      <View
        style={[
          componentStyles.backDrop,
          styles.horizontalPadding,
          styles.justifyC,
          styles.itemsC,
          {paddingVertical: 37},
        ]}>
        <View style={[componentStyles.popupContainer, styles.shadow]}>
          <ScrollView>
            <Image
              style={{width: 330, height: 251}}
              source={require('../../assets/images/MBC_ofertas1.png')}
            />
            <Pressable
              onPress={() => toggleOffer(!offerVisible)}
              style={componentStyles.cardThumbnailPositionRight}>
              <MaterialCommunityIcons
                name="arrow-left-circle"
                size={41}
                color={colors.terciary}
                style={componentStyles.IconSizeLarge}
              />
            </Pressable>

            <View
              style={[
                backgroundColors.secondary,
                styles.horizontalPadding,
                {paddingVertical: 40},
              ]}>
              <Text
                style={[
                  fontColors.primary,
                  fonts.primarySmall,
                  styles.textAlignC,
                  styles.mb20,
                ]}>
                DESCUENTO EXCLUSIVO APP
              </Text>
              <Text
                style={[
                  fontColors.primary,
                  fonts.secondary50,
                  styles.textAlignC,
                  styles.mb10,
                ]}>
                2X1 EN IPA
              </Text>
              <Text
                style={[
                  fontColors.terciary,
                  fonts.primarySmall,
                  styles.textAlignC,
                  styles.mb20,
                ]}>
                LUNES A JUEVES DE 18 A 20 HS
              </Text>
              <Text
                style={[
                  fontColors.primary,
                  fonts.primary,
                  styles.textAlignC,
                  styles.mb40,
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              <Pressable
                style={[
                  componentStyles.terciaryButton,
                  backgroundColors.quaternary,
                  ,
                  styles.mb40,
                ]}
                onPress={() => toggleOffer(!offerVisible)}>
                <Text
                  style={[
                    fonts.primarySmall,
                    styles.textAlignC,
                    fontColors.primary,
                  ]}>
                  CANJEALO AHORA
                </Text>
              </Pressable>
              <Text
                style={[
                  fonts.primarySmaller,
                  fontColors.lightGray,
                  styles.textAlignC,
                ]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
