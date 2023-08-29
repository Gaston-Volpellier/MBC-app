import React, {useEffect} from 'react';
import {Modal, Text, View, Pressable, Image, ScrollView} from 'react-native';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import {AntDesign, FontAwesome} from '../libs/vector-icons';
import * as api from '../services/api';
import InsetShadow from 'react-native-inset-shadow';
import {useSession} from '../utils/SessionProvider';

export default function InternalOffer({
  toggleOffer,
  offerVisible,
  toggleModal,
  offerData,
  handleModalData,
}): JSX.Element {
  const {idToken} = useSession();

  //borrar, solo para desarrollo
  useEffect(() => {
    console.log('Datos de oferta!! ', offerData);
  }, []);

  const handleCoupon = async () => {
    try {
      const couponData = await api.generateCoupon(idToken, offerData.id);
      if (!couponData.error) {
        console.log('Coupon Generated!: ', couponData.data);

        // toggleOffer(!offerVisible), toggleModal(true);
      } else {
        console.log('error with coupon: ', couponData);
      }
    } catch (error) {
      console.log('error generating coupon!', error);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={offerVisible}
      onRequestClose={() => toggleOffer(!offerVisible)}>
      <ScrollView>
        <View
          style={[
            componentStyles.backDrop,
            styles.horizontalPadding,
            styles.justifyC,
            styles.itemsC,
            {paddingVertical: 37},
          ]}>
          <View style={[styles.shadow, {borderRadius: 20}]}>
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 50,
                backgroundColor: colors.backdrop,
                zIndex: 20,
                position: 'absolute',
                top: 0,
                overflow: 'hidden',
                left: '50%',
                transform: [{translateX: -23}, {translateY: -23}],
              }}
            />
            <View
              style={{
                width: 46,
                height: 46,
                borderRadius: 50,
                backgroundColor: colors.backdrop,
                zIndex: 20,
                position: 'absolute',
                bottom: 0,
                overflow: 'hidden',
                left: '50%',
                transform: [{translateX: -23}, {translateY: 23}],
              }}>
              <InsetShadow
                shadowRadius={3.5}
                shadowOffset={10}
                elevation={10}
                shadowOpacity={0.25}
                color={colors.black}
                right={false}
                left={false}
                bottom={false}>
                <View />
              </InsetShadow>
            </View>
            <View
              style={[
                componentStyles.popupContainer,
                {overflow: 'hidden', borderRadius: 20},
              ]}>
              {offerData.foto ? (
                <Image
                  style={{width: 330, height: 251}}
                  source={{uri: offerData.foto}}
                  alt={''}
                />
              ) : (
                <View style={{width: 330, height: 251}} />
              )}

              <Pressable
                onPress={() => toggleOffer(!offerVisible)}
                style={componentStyles.cardThumbnailPositionRight}>
                <View
                  style={{
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 41,
                    height: 41,
                  }}>
                  <FontAwesome
                    name="circle"
                    size={41}
                    color={colors.terciary}
                  />
                  <AntDesign
                    name="arrowleft"
                    size={20}
                    color={'white'}
                    style={{position: 'absolute', zIndex: 99}}
                  />
                </View>
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
                  ]}>
                  DESCUENTO EXCLUSIVO APP
                </Text>
                <Text
                  style={[
                    fontColors.primary,
                    fonts.secondary50,
                    styles.textAlignC,
                    fonts.lh70,
                  ]}>
                  {offerData.titulo}
                </Text>
                <Text
                  style={[
                    fontColors.terciary,
                    fonts.primarySmall,
                    styles.textAlignC,
                    styles.mb20,
                  ]}>
                  {offerData.extracto}
                </Text>
                <Text
                  style={[
                    fontColors.primary,
                    fonts.primary,
                    styles.textAlignC,
                    styles.mb40,
                  ]}>
                  {offerData.descripcion}
                </Text>

                <Pressable
                  style={[
                    componentStyles.terciaryButton,
                    backgroundColors.quaternary,
                    ,
                    styles.mb40,
                  ]}
                  onPress={handleCoupon}>
                  <Text
                    style={[
                      fonts.primarySmall,
                      styles.textAlignC,
                      fontColors.primary,
                    ]}>
                    CANJEALO EN CAJA
                  </Text>
                </Pressable>
                <Text
                  style={[
                    fonts.primarySmaller,
                    fontColors.lightGray,
                    styles.textAlignC,
                  ]}>
                  {offerData.tyc}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
