import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import ImageSectionAlt from '../components/ImageSectionAlt';
import {backgroundColors, fontColors} from '../styles/variables';
import InternalOffer from '../components/InternalOffer';
import PopUpContainer from '../components/PopupContainer';

export default function Offers({navigation}: Props): JSX.Element {
  const [offerVisible, setOfferVisible] = useState(false);
  const [popUpVisible, setPopUpVisible] = useState(false);

  const image1 = 'MBC_ofertas1.png';
  const image2 = 'MBC_ofertas2.png';
  const image3 = 'MBC_ofertas3.png';
  const image4 = 'MBC_ofertas4.png';
  const image5 = 'MBC_ofertas5.png';

  return (
    <View>
      <InternalOffer
        toggleOffer={setOfferVisible}
        offerVisible={offerVisible}
      />
      <PopUpContainer
        togglePopUp={setPopUpVisible}
        popUpVisible={popUpVisible}
      />
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
            styles.textAlignC,
          ]}>
          DEJATE SORPRENDER POR ESTAS OFERTAS EXCLUSIVAS
        </Text>
        <View style={[componentStyles.cardContainer, styles.horizontalPadding]}>
          <Pressable
            style={componentStyles.sectionContainer}
            onPress={() => setPopUpVisible(true)}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image1)}
              altDescription="Section image"
              title="2X1 EN IPA"
              description="TODOS LOS DÍAS DE 16 A 20 HS"
            />
          </Pressable>
          <Pressable
            style={componentStyles.sectionContainer}
            onPress={() => setOfferVisible(true)}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image2)}
              altDescription="Section image"
              title="5X4 EN GOLDEN"
              description="TODOS LOS DÍAS DE 16 A 20 HS"
            />
          </Pressable>
          <View style={componentStyles.sectionContainer}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image3)}
              altDescription="Section image"
              title="2X1 EN HAMBURGUESAS"
              description="TODOS LOS DÍAS DESDE LAS 19 HS"
            />
          </View>
          <View style={componentStyles.sectionContainer}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image4)}
              altDescription="Section image"
              title="20% EN TODOS LOS TRAGOS"
              description="TODOS LOS DÍAS DESDE LAS 18 HS"
            />
          </View>
          <View style={componentStyles.sectionContainer}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image5)}
              altDescription="Section image"
              title="SEMANA DEL NACHO"
              description="50% OFF EN NACHOS CON QUESO"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
