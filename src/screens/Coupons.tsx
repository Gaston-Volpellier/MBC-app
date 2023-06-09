import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import ImageSectionAlt from '../components/ImageSectionAlt';
import {fontColors} from '../styles/variables';

export default function Coupons({navigation}: Props): JSX.Element {
  const image1 = 'MBC_ofertas4.png';
  const image2 = 'MBC_ofertas5.png';

  return (
    <View>
      <Header
        openDrawer={() => navigation.openDrawer()}
        closeDrawer={() => navigation.closeDrawer()}
      />
      <ScrollView style={[componentStyles.mainContainer]}>
        <Text
          style={[
            fonts.secondaryMain,
            styles.horizontalPadding,
            styles.homePadding,
            fontColors.primary,
          ]}>
          MIS CUPONES
        </Text>
        <View style={componentStyles.cardContainer}>
          <ImageSectionAlt
            image={require('../../assets/images/' + image1)}
            altDescription="Section image"
            title="20% EN TODOS LOS TRAGOS"
            description="TODOS LOS DÍAS DESDE LAS 18 HS"
            status={1}
          />
          <ImageSectionAlt
            image={require('../../assets/images/' + image2)}
            altDescription="Section image"
            title="2X1 EN HAMBURGUESAS"
            description="TODOS LOS DÍAS DESDE LAS 19 HS"
            status={2}
          />
        </View>
      </ScrollView>
    </View>
  );
}
