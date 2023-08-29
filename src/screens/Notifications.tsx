import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Switch,
  Pressable,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {Ionicons} from '../libs/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {useSession} from '../utils/SessionProvider';
import * as api from '../services/api';
import {storeData} from '../services/functions';

export default function Notifications(props: Props): JSX.Element {
  const firstUpdate = useRef(false);
  const {setNotEmail, setNotPush, notPush, notEmail, idToken} = useSession();
  const [promos, setPromos] = useState(notPush);
  const [email, setEmail] = useState(notEmail);

  useEffect(() => {
    if (firstUpdate.current == true) {
      handleSubmit();
    }
    return () => (firstUpdate.current = true);
  }, [promos, email]);

  const togglePromos = () => {
    setPromos(previousState => (previousState === 0 ? 1 : 0));
  };

  const toggleEmail = () =>
    setEmail(previousState => (previousState === 0 ? 1 : 0));

  const navigation = useNavigation();

  const handleSubmit = async () => {
    console.log('promos ', promos);
    console.log('email ', email);
    const response = await api.notifications(idToken, promos, email);

    if (!response.error) {
      storeData('notPush', promos.toString());
      storeData('notEmail', email.toString());
      setNotPush(promos);
      setNotEmail(email);
    }
  };

  return (
    <SafeAreaView style={backgroundColors.secondary}>
      <HeaderSecondary
        title="Notificaciones"
        iconRight={
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back-circle"
              size={35}
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
          styles.w100,
        ]}>
        <View style={[styles.horizontalAlign, styles.mb20]}>
          <Text style={[fonts.primaryLarge, fontColors.primary]}>
            Configuración de notificaciones
          </Text>
        </View>
        <View style={[componentStyles.grayLine, styles.mb20]} />
        <View>
          <View style={[styles.mb40, styles.horizontalAlign]}>
            <View style={{maxWidth: '80%'}}>
              <Text
                style={[fonts.primarySmall, fontColors.primary, styles.mb20]}>
                Notificaciones promocionales
              </Text>
              <Text style={[fonts.primarySmaller, fontColors.primary]}>
                Recibe notificaciones sobre premios especiales, recompensas y
                promociones.
              </Text>
            </View>
            <View>
              <Switch
                style={componentStyles.switchSize}
                trackColor={{
                  false: colors.lightGrayAlt,
                  true: colors.terciaryLight,
                }}
                thumbColor={promos ? colors.terciary : colors.gray}
                onValueChange={() => togglePromos()}
                value={promos ? true : false}
                name="promos"
              />
            </View>
          </View>
          <View style={[styles.mb40, styles.horizontalAlign]}>
            <View style={{maxWidth: '80%'}}>
              <Text
                style={[fonts.primarySmall, fontColors.primary, styles.mb20]}>
                Notificaciones por mail
              </Text>
              <Text style={[fonts.primarySmaller, fontColors.primary]}>
                Recibe notificaciones sobre premios especiales, recompensas y
                promociones.
              </Text>
            </View>
            <Switch
              style={componentStyles.switchSize}
              trackColor={{
                false: colors.lightGrayAlt,
                true: colors.terciaryLight,
              }}
              thumbColor={email ? colors.terciary : colors.gray}
              onValueChange={() => toggleEmail()}
              value={email ? true : false}
              name="email"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
