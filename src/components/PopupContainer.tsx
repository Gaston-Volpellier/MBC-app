import React from 'react';
import {
  Modal,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {AntDesign, FontAwesome} from '../libs/vector-icons';
import {useSession} from '../utils/SessionProvider';

export default function PopUpContainer({
  togglePopUp,
  popUpVisible,
}): JSX.Element {
  const {adData} = useSession();

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
              source={{uri: adData.foto}}
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
                {adData.titulo}
              </Text>
              <Text
                style={[
                  fontColors.primary,
                  fonts.primary,
                  styles.textAlignC,
                  styles.mb20,
                ]}>
                {adData.descripcion}
              </Text>
              <View style={{alignItems: 'center'}}>
                <Pressable
                  style={[
                    componentStyles.primaryButton,
                    backgroundColors.quaternary,
                  ]}
                  onPress={() => Linking.openURL(adData.btn_link)}>
                  <Text
                    style={[
                      fonts.primarySmall,
                      styles.textAlignC,
                      fontColors.primary,
                    ]}>
                    {adData.btn_txt}
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
