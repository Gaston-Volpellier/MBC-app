import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {fontColors} from '../styles/variables';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import styles from '../styles/styles';
import {useNavigation} from '@react-navigation/native';

export default function UsedCoupon(props): JSX.Element {
  const navigation = useNavigation();

  return (
    <View>
      <View style={[styles.mb20, {alignItems: 'center', paddingTop: 44}]}>
        <Image
          style={componentStyles.CheckIcon}
          source={require('../../assets/images/Coupon_check.png')}
        />
      </View>
      {/* for testing purposes */}
      <Pressable onPress={() => props.setIsUsed(false)}>
        <Text
          style={[fonts.secondaryVeryLarge, fontColors.primary, styles.mb14]}>
          CUPÓN UTILIZADO
        </Text>
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.primary,
            styles.mb40,
          ]}>
          ¡MUCHAS GRACIAS!
        </Text>
      </Pressable>
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
  );
}
