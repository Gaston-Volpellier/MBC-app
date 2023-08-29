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
import {useData} from '../utils/DataProvider';
import * as api from '../services/api';
import Spinner from '../components/Spinner';

export default function Offers({navigation}: Props): JSX.Element {
  // const {offersList} = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [offersList, setOffersList] = useState();
  const [offerVisible, setOfferVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: '20% EN TODOS LOS TRAGOS',
    number: '#144 712 83241',
    expiration: 'Disponible hasta las 20.32 del 12/03/2023',
    status: 1,
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
        console.log('Promociones data', data.promociones);
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
    setOfferData({
      titulo,
      extracto,
      tyc,
      descripcion,
      foto,
      validez,
      id,
    });

    //Generar cupon desde la api y cargar los datos en couponData
    // handleModalData()

    setOfferVisible(!offerVisible);
  };

  const handleModalData = (title, number, expiration, status) => {
    setModalData({
      title,
      number,
      expiration,
      status,
    });
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <InternalOffer
        toggleOffer={setOfferVisible}
        toggleModal={setModalVisible}
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
            <Spinner />
          ) : (
            <View>
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
