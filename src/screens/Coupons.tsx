import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import Header from '../components/Header';
import ImageSectionAlt from '../components/ImageSectionAlt';
import CouponModal from '../components/CouponModal';
import * as api from '../services/api';
import {useSession} from '../utils/SessionProvider';
import Spinner from '../components/Spinner';

export default function Coupons({navigation}: Props): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    number: '',
    expiration: '',
    status: 0,
    url: '',
  });
  const [filter, setFilter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [couponsList, setCouponsList] = useState();
  const {idToken} = useSession();

  const onRefresh = React.useCallback(() => {
    setIsLoading(true);
    getCoupons();
  }, []);

  const getCoupons = async () => {
    try {
      const data = await api.fetchHistory(idToken, 0);
      if (data?.error == false) {
        const couponsLength = Object.keys(data.cupones).length;
        couponsLength > 0 ? setCouponsList(data.cupones) : null;

        setIsLoading(false);
      } else {
        console.log('Data error: ', data);
      }
    } catch (error) {
      console.log('Error fetching coupons: ', error);
    }
  };

  useEffect(() => {
    getCoupons();
  }, []);

  const handleModalData = (title, number, expiration, status, url) => {
    setModalData({
      title: title,
      number: number,
      expiration: expiration,
      status: status,
      url: url,
    });
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView>
      <Header
        openDrawer={() => navigation.openDrawer()}
        closeDrawer={() => navigation.closeDrawer()}
      />
      <CouponModal
        toggleModal={setModalVisible}
        modalVisible={modalVisible}
        modalData={modalData}
      />
      <ScrollView
        style={[componentStyles.mainContainer, backgroundColors.quaternary]}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <Text
          style={[
            fonts.secondaryMain,
            styles.horizontalPadding,
            styles.homePadding,
            fontColors.primary,
            styles.textAlignC,
            fonts.lh35,
          ]}>
          MIS CUPONES
        </Text>
        <View style={[componentStyles.cardContainer, styles.horizontalPadding]}>
          <ScrollView style={[{flexDirection: 'row'}, styles.mb20]} horizontal>
            <Pressable
              onPress={() => setFilter(3)}
              style={[
                componentStyles.carouselButton,
                filter === 3
                  ? backgroundColors.primary
                  : backgroundColors.secondary,
              ]}>
              <Text
                style={[
                  fonts.primarySmall,
                  filter === 3 ? fontColors.secondary : fontColors.primary,
                ]}>
                Todos
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter(0)}
              style={[
                componentStyles.carouselButton,
                filter === 0
                  ? backgroundColors.primary
                  : backgroundColors.secondary,
              ]}>
              <Text
                style={[
                  fonts.primarySmall,
                  filter === 0 ? fontColors.secondary : fontColors.primary,
                ]}>
                Activos
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter(1)}
              style={[
                componentStyles.carouselButton,
                filter === 1
                  ? backgroundColors.primary
                  : backgroundColors.secondary,
              ]}>
              <Text
                style={[
                  fonts.primarySmall,
                  filter === 1 ? fontColors.secondary : fontColors.primary,
                ]}>
                Inactivos
              </Text>
            </Pressable>
          </ScrollView>
          {isLoading ? (
            <View style={{paddingTop: 50, minHeight: 300}}>
              <Spinner />
            </View>
          ) : (
            <View style={{minHeight: 200}}>
              {couponsList ? (
                couponsList.map(coupon =>
                  filter == 3 || filter == coupon.estado ? (
                    <Pressable
                      key={coupon.id}
                      onPress={() => {
                        handleModalData(
                          coupon.promocion.titulo,
                          coupon.codigo,
                          coupon.fecha_fin,
                          coupon.estado,
                          coupon.cupon_qr,
                        );
                      }}
                      style={styles.mb20}>
                      <ImageSectionAlt
                        imageURL={coupon.promocion.foto}
                        altDescription={coupon.promocion.extracto}
                        title={coupon.promocion.titulo}
                        description={coupon.promocion.validez}
                        status={coupon.estado}
                      />
                    </Pressable>
                  ) : null,
                )
              ) : (
                <Text
                  style={[
                    fonts.primary,
                    styles.horizontalPadding,
                    styles.homePadding,
                    fontColors.primary,
                    styles.textAlignC,
                  ]}>
                  Aun no tiene Cupones en su perfil.
                </Text>
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
