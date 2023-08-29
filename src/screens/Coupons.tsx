import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import Header from '../components/Header';
import ImageSectionAlt from '../components/ImageSectionAlt';
import CouponModal from '../components/CouponModal';
import {useData} from '../utils/DataProvider';

export default function Coupons({navigation}: Props): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    number: '',
    expiration: '',
    status: 0,
  });
  const [filter, setFilter] = useState(0);
  const {couponsList} = useData();

  const handleModalData = (title, number, expiration, status) => {
    setModalData({
      title: title,
      number: number,
      expiration: expiration,
      status: status,
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
          MIS CUPONES
        </Text>
        <View
          style={[
            componentStyles.cardContainer,
            styles.horizontalPadding,
            styles.mb20,
          ]}>
          <ScrollView style={[{flexDirection: 'row'}, styles.mb20]} horizontal>
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
                Todos
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
                Activos
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setFilter(2)}
              style={[
                componentStyles.carouselButton,
                filter === 2
                  ? backgroundColors.primary
                  : backgroundColors.secondary,
              ]}>
              <Text
                style={[
                  fonts.primarySmall,
                  filter === 2 ? fontColors.secondary : fontColors.primary,
                ]}>
                Inactivos
              </Text>
            </Pressable>
          </ScrollView>
          {couponsList.map(coupon =>
            filter == 0 || filter == coupon.status ? (
              <Pressable
                key={coupon.id}
                onPress={() => {
                  handleModalData(
                    coupon.title,
                    coupon.number,
                    coupon.expiration,
                    coupon.status,
                  );
                }}
                style={styles.mb20}>
                <ImageSectionAlt
                  image={coupon.image}
                  altDescription={coupon.altDescription}
                  title={coupon.title}
                  description={coupon.description}
                  status={coupon.status}
                />
              </Pressable>
            ) : null,
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
