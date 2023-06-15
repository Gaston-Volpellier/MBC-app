import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, Alert} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';
import Header from '../components/Header';
import ImageSectionAlt from '../components/ImageSectionAlt';
import QrCoupon from '../components/QrModal';

export default function Coupons({navigation}: Props): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    number: '',
    expiration: '',
    status: 0,
  });

  const handleModalData = (title, number, expiration, status) => {
    setModalData({
      title: title,
      number: number,
      expiration: expiration,
      status: status,
    });
    setModalVisible(!modalVisible);
  };

  const image1 = 'MBC_ofertas4.png';
  const image2 = 'MBC_ofertas5.png';

  return (
    <View>
      <Header
        openDrawer={() => navigation.openDrawer()}
        closeDrawer={() => navigation.closeDrawer()}
      />
      <QrCoupon
        toggleModal={setModalVisible}
        modalVisible={modalVisible}
        modalData={modalData}
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
          MIS CUPONES
        </Text>
        <View style={[componentStyles.cardContainer, styles.horizontalPadding]}>
          <Pressable
            onPress={() => {
              handleModalData(
                '20% EN TODOS LOS TRAGOS',
                '#144 712 83241',
                'Disponible hasta las 20.32 del 12/03/2023',
                2,
              );
            }}
            style={styles.mb20}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image1)}
              altDescription="Section image"
              title="20% EN TODOS LOS TRAGOS"
              description="TODOS LOS DÍAS DESDE LAS 18 HS"
              status={1}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              handleModalData(
                '2X1 EN HAMBURGUESAS',
                '#111 11 11111',
                'Disponible hasta las 00.32 del 15/05/02',
                2,
              );
            }}
            style={styles.mb20}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image2)}
              altDescription="Section image"
              title="2X1 EN HAMBURGUESAS"
              description="TODOS LOS DÍAS DESDE LAS 19 HS"
              status={2}
            />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
