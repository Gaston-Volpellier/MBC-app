import React from 'react';
import {Modal, Text, View, Pressable, Image, ScrollView} from 'react-native';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {AntDesign, FontAwesome} from '../libs/vector-icons';

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
            <Pressable
              onPress={() => togglePopUp(!popUpVisible)}
              style={componentStyles.cardThumbnailPositionRight}>
              <View
                style={{
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                }}>
                <FontAwesome
                  name="circle"
                  size={40}
                  color={colors.quaternary}
                />
                <AntDesign
                  name="close"
                  size={25}
                  color={colors.secondary}
                  style={{position: 'absolute', zIndex: 99}}
                />
              </View>
            </Pressable>
            <View
              style={[
                backgroundColors.quaternary,
                styles.horizontalPadding,
                {paddingVertical: 33},
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
              <View style={{alignItems: 'center'}}>
                <Pressable
                  style={[
                    componentStyles.primaryButton,
                    backgroundColors.quaternary,
                  ]}
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
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
