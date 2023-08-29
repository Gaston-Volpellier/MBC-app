import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import {backgroundColors, fontColors} from '../styles/variables';
import componentStyles from '../styles/components';
import Header from '../components/Header';
import StoresSection from '../components/StoresSection';
import * as api from '../services/api';
import Spinner from '../components/Spinner';

export default function Stores({navigation}: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [storesList, setStoresList] = useState();

  const getStores = async () => {
    try {
      const data = await api.fetchStores();

      if (data?.error == false) {
        setStoresList(data.locales);
        setIsLoading(false);
      } else {
        console.log('Data error: ', data);
      }
    } catch (error) {
      console.log('Error fetching stores: ', error);
    }
  };

  useEffect(() => {
    getStores();
  }, []);

  return (
    <SafeAreaView>
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
            styles.textAlignC,
            fontColors.primary,
            styles.textAlignC,
            fonts.lh35,
          ]}>
          Locales MBC
        </Text>
        <View style={[componentStyles.cardContainer]}>
          {isLoading ? (
            <Spinner />
          ) : (
            <View>
              {storesList &&
                storesList.map(store => (
                  <StoresSection
                    key={store.id}
                    imageURL={store.imagen}
                    altDescription="Section image"
                    title={store.nombre}
                    openingHours={store.horario}
                    address={store.direccion}
                    city="Carrasco, Montevideo"
                    location={store.link}
                    link={store.link_reserva}
                  />
                ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
