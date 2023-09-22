import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {AntDesign, FontAwesome, Feather } from '../libs/vector-icons';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import ImageSectionAlt from '../components/ImageSectionAlt';
import {useSession} from '../utils/SessionProvider';
import {CustomAppIcon} from '../libs/Custom.App.Icon';
import * as api from '../services/api';
import Spinner from '../components/Spinner';

export default function Profile(props): JSX.Element {
  const {logout, userName, email, phone, birthDate, idToken} = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [couponsList, setCouponsList] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    title: '',
    number: '',
    expiration: '',
    status: 0,
    url: '',
  });

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

  const processLogout = () => {
    setButtonLoading(true);
    logout();
  };

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <SafeAreaView style={[backgroundColors.secondary, {flex: 1}]}>
      <HeaderSecondary
        title="Perfil y cuenta"
        iconLeft={
          <Pressable onPress={() => props.navigation.navigate('Settings')}>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
              }}>
              <FontAwesome name="circle" size={40} color={colors.lightGray} />
              <CustomAppIcon
                name="gear"
                size={18}
                color={colors.primary}
                style={{position: 'absolute', zIndex: 99}}
              />
            </View>
          </Pressable>
        }
        iconRight={
          <Pressable onPress={() => props.navigation.goBack()}>
            <AntDesign
              name="closecircle"
              size={34}
              color={colors.terciary}
              style={componentStyles.IconSizeRegular}
            />
          </Pressable>
        }
      />
      <ScrollView
        style={[
          componentStyles.mainContainer,
          styles.horizontalPadding,
          backgroundColors.secondary,
        ]}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
            Datos Personales
          </Text>
          <Pressable onPress={() => props.navigation.navigate('Edit_Profile')}>
            <CustomAppIcon name="pen" size={18} color={colors.primary} />
          </Pressable>
        </View>
        <View style={[componentStyles.grayLine, styles.mb14]} />
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.terciary,
            styles.mb20,
            {textAlign: 'left'},
          ]}>
          {userName}
        </Text>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <FontAwesome
            name="envelope-o"
            size={22}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text style={[fonts.primarySmall, fontColors.primary]}>{email}</Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <Feather
            name="phone-call"
            size={22}
            color={colors.primary}
            style={{marginEnd: 17}}
          />

          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            {phone ? phone : '- - - -'}
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <CustomAppIcon
            name="bday"
            size={22}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            {birthDate}
          </Text>
        </View>
        <View style={[componentStyles.grayLine, styles.mb14]} />
        <Text style={[fonts.secondary, fontColors.primary, {marginBottom: 14}]}>
          Mis Cupones
        </Text>

        <View style={styles.mb20}>
          {isLoading ? (
            <View style={{paddingTop: 50, minHeight: 300}}>
              <Spinner />
            </View>
          ) : (
            <View>
              {couponsList ? (
                couponsList.map(coupon =>
                  coupon.estado == 0 ? (
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
        <View style={[componentStyles.grayLine, styles.mb20]} />
        <View style={{alignItems: 'center'}}>
          <View
            style={[
              componentStyles.secondaryButton,
              backgroundColors.lightGray,
              {marginBottom: 50},
            ]}>
            <Pressable onPress={() => processLogout()} disabled={buttonLoading}>
              {buttonLoading ? (
                <ActivityIndicator size={25} />
              ) : (
                <Text
                  style={[
                    fonts.primarySmall,
                    styles.textAlignC,
                    fontColors.primary,
                  ]}>
                  CERRAR SESIÓN
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
