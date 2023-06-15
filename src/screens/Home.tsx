import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import {backgroundColors, colors, fontColors} from '../styles/variables';

export default function Home({navigation}: Props): JSX.Element {
  const image1 = 'Rectangle2.png';
  const image2 = 'Rectangle3.png';
  const image3 = 'Rectangle4.png';
  const image4 = 'Holding-Hand-Smart-Phone-Mockup.png';

  return (
    <View>
      <Header
        openDrawer={() => navigation.openDrawer()}
        closeDrawer={() => navigation.closeDrawer()}
      />
      <ScrollView
        style={[componentStyles.mainContainer, backgroundColors.quaternary]}>
        <Text
          style={[
            fonts.secondaryMain,
            styles.horizontalPadding,
            styles.homePadding,
            fontColors.primary,
            fonts.lh35,
          ]}>
          NI EN TINDER, NI EN BUMBLE, NI EN HAPPN.. ACÁ SÍ VAS A ENCONTRAR TU
          MATCH PERFECTO
        </Text>
        <View style={componentStyles.cardContainer}>
          <Pressable onPress={() => navigation.navigate('Offers')}>
            <ImageSection
              title="OFERTAS EXCLUSIVAS"
              image={require('../../assets/images/' + image1)}
              altDescription="Section image"
              imageDescription="DESCUENTOS EXCLUSIVOS PARA VOS"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Coupons')}>
            <ImageSection
              title="MIS CUPONES"
              image={require('../../assets/images/' + image2)}
              altDescription="Section image"
              imageDescription="DISFRUTÁ DE TUS CUPONES"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Stores')}>
            <ImageSection
              title="NUESTOS LOCALES"
              image={require('../../assets/images/' + image3)}
              altDescription="Section image"
              imageDescription="CONOCÉ NUESTROS LOCALES"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Stores')}>
            <ImageSection
              title="Tienda online"
              image={require('../../assets/images/' + image4)}
              altDescription="Section image"
              imageDescription="LO MEJOR DE MBC, A UN CLICK"
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
