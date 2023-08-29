import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import {backgroundColors, fontColors} from '../styles/variables';
import PopUpContainer from '../components/PopupContainer';
import {useSession} from '../utils/SessionProvider';

export default function Home({navigation}: Props): JSX.Element {
  const offersImage = 'Rectangle2.png';
  const couponsImage = 'Rectangle3.png';
  const storesImage = 'Rectangle4.png';
  const onlineStoreImage = 'Holding-Hand-Smart-Phone-Mockup.png';
  const [popUpVisible, setPopUpVisible] = useState(false);
  const {showAd, setShowAd, isAuthenticated, setLoginModalVisible} =
    useSession();

  useEffect(() => {
    const triggerPopUp = () => {
      setTimeout(() => setPopUpVisible(true), 1000);
      setShowAd(0);
    };

    showAd ? triggerPopUp() : null;
  }, []);

  return (
    <SafeAreaView>
      <Header
        openDrawer={() => navigation.openDrawer()}
        closeDrawer={() => navigation.closeDrawer()}
      />
      <PopUpContainer
        togglePopUp={setPopUpVisible}
        popUpVisible={popUpVisible}
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
            fonts.lh35,
          ]}>
          NI EN TINDER, NI EN BUMBLE,{'\n'} NI EN HAPPN.. ACÁ SÍ VAS A{'\n'}
          ENCONTRAR TU MATCH{'\n'} PERFECTO
        </Text>
        <View style={[componentStyles.cardContainer, styles.mb20]}>
          <Pressable onPress={() => navigation.navigate('Offers')}>
            <ImageSection
              title="OFERTAS EXCLUSIVAS"
              image={require('../../assets/images/' + offersImage)}
              altDescription="Section image"
              imageDescription="DESCUENTOS EXCLUSIVOS PARA VOS"
            />
          </Pressable>
          <Pressable
            onPress={() =>
              isAuthenticated
                ? navigation.navigate('Coupons')
                : setLoginModalVisible(true)
            }>
            <ImageSection
              title="MIS CUPONES"
              image={require('../../assets/images/' + couponsImage)}
              altDescription="Section image"
              imageDescription="DISFRUTÁ DE TUS CUPONES"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Stores')}>
            <ImageSection
              title="NUESTOS LOCALES"
              image={require('../../assets/images/' + storesImage)}
              altDescription="Section image"
              imageDescription="CONOCÉ NUESTROS LOCALES"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Home')}>
            <ImageSection
              title="Tienda online"
              image={require('../../assets/images/' + onlineStoreImage)}
              altDescription="Section image"
              imageDescription="LO MEJOR DE MBC, A UN CLICK"
            />
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
