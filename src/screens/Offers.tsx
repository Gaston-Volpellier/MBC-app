import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import ImageSectionAlt from '../components/ImageSectionAlt';
import {backgroundColors, fontColors} from '../styles/variables';
import InternalOffer from '../components/InternalOffer';
import CouponModal from '../components/CouponModal';
import * as api from '../services/api';
import Spinner from '../components/Spinner';
import {useSession} from '../utils/SessionProvider';

export default function Offers({navigation}: Props): JSX.Element {
  const {isAuthenticated, setLoginModalVisible} = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [offersList, setOffersList] = useState();
  const [offerVisible, setOfferVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    number: '',
    expiration: '',
    status: 0,
    url: '',
  });

  const [offerData, setOfferData] = useState({
    titulo: null,
    extracto: null,
    tyc: null,
    descripcion: null,
    foto: null,
    validez: null,
  });

  const getOffers = async () => {
    try {
      const data = await api.fetchOffers();
      if (data?.error == false) {
        setOffersList(data.promociones);
        setIsLoading(false);
      } else {
        console.log('Promociones error: ', data);
      }
    } catch (error) {
      console.log('Error fetching offers: ', error);
    }
  };

  useEffect(() => {
    getOffers();
  }, []);

  const handleOfferData = data => {
    const {titulo, extracto, descripcion, tyc, foto, validez, id} = data;
    isAuthenticated
      ? (setOfferData({
          titulo,
          extracto,
          tyc,
          descripcion,
          foto,
          validez,
          id,
        }),
        setOfferVisible(!offerVisible))
      : setLoginModalVisible(true);
  };

  const handleModalData = (title, number, expiration, status, url) => {
    setModalData({
      title,
      number,
      expiration,
      status,
      url,
    });
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <InternalOffer
        toggleOffer={setOfferVisible}
        offerVisible={offerVisible}
        offerData={offerData}
        handleModalData={handleModalData}
      />
      <CouponModal
        toggleModal={setModalVisible}
        modalVisible={modalVisible}
        modalData={modalData}
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
            fonts.lh35,
          ]}>
          DEJATE SORPRENDER POR ESTAS OFERTAS EXCLUSIVAS
        </Text>
        <View
          style={[
            componentStyles.cardContainer,
            styles.horizontalPadding,
            styles.mb20,
          ]}>
          {isLoading ? (
            <View style={{minHeight: 300}}>
              <Spinner />
            </View>
          ) : (
            <View style={{minHeight: 300}}>
              {offersList &&
                offersList.map(offer => (
                  <Pressable
                    style={styles.mb20}
                    key={offer.id}
                    onPress={() => handleOfferData(offer)}>
                    <ImageSectionAlt
                      title={offer.titulo}
                      description={offer.extracto}
                      altDescription={offer.altDescription}
                      imageURL={offer.foto}
                    />
                  </Pressable>
                ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
