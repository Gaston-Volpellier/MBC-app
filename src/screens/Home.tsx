import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  Linking,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import ImageSection from '../components/ImageSection';
import {backgroundColors, fontColors} from '../styles/variables';
import PopUpContainer from '../components/PopupContainer';
import {useSession} from '../utils/SessionProvider';
import * as api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}: Props): JSX.Element {
  const offersImage = 'Rectangle2.png';
  const couponsImage = 'Rectangle3.png';
  const storesImage = 'Rectangle4.png';
  const onlineStoreImage = 'Holding-Hand-Smart-Phone-Mockup.png';
  const [popUpVisible, setPopUpVisible] = useState(false);
  const {
    showAd,
    idToken,
    setShowAd,
    isAuthenticated,
    setLoginModalVisible,
    setAdData,
    adData,
  } = useSession();

  useEffect(() => {
    const loadAdData = async () => {
      try {
        if (isAuthenticated) {
          const response = await api.fetchAd(idToken);

          if (!response.error) {
            setAdData(response.publicidad);
            setShowAd(0);
          } else {
            console.log('Ad error: ', response.error);
          }
        }
      } catch (error) {
        console.log('Error fetching ad from server: ', error);
      }
    };

    showAd ? isAuthenticated && loadAdData() : null;
  }, []);

  useEffect(() => {
    isAuthenticated && adData != undefined && showAd
      ? setTimeout(async () => {
          const adStorage = await AsyncStorage.getItem('adStorage');
          console.log('Triggering popup: ', adData, showAd);
          if (!adStorage) {
            setPopUpVisible(true);
            await AsyncStorage.setItem('adStorage', '1');
          }
        }, 1000)
      : null;
  }, [adData]);

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
          <Pressable
            onPress={() =>
              Linking.openURL('https://linktr.ee/MontevideoBeerCompany')
            }>
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
