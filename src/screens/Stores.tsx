import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import {fontColors} from '../styles/variables';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import StoresSection from '../components/StoresSection';

export default function Stores({navigation}: Props): JSX.Element {
  const image1 = 'MBC_carrasco.png';
  const image2 = 'MBC_carrasco.png';

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
          Locales MBC
        </Text>
        <View style={[componentStyles.cardContainer]}>
          <StoresSection
            image={require('../../assets/images/' + image1)}
            altDescription="Section image"
            title="MBC CARRASCO"
            openingHours="Martes a sábados 19 a 01 hs"
            address="Av. Lorem Ipsum 19123."
            city="Carrasco, Montevideo"
            location="1"
          />
          <StoresSection
            image={require('../../assets/images/' + image1)}
            altDescription="Section image"
            title="MBC CARRASCO"
            openingHours="Martes a sábados 19 a 01 hs"
            address="Av. Lorem Ipsum 19123."
            city="Carrasco, Montevideo"
            location="1"
          />
        </View>
      </ScrollView>
    </View>
  );
}
