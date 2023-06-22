import React, {useState} from 'react';
import {View, Text, ScrollView, Switch, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {Entypo, Ionicons} from '../libs/vector-icons';

export default function Notifications(props, {navigation}: Props): JSX.Element {
  const [promos, setPromos] = useState(false);
  const [email, setEmail] = useState(false);
  const togglePromos = () => setPromos(previousState => !previousState);
  const toggleEmail = () => setEmail(previousState => !previousState);

  return (
    <View style={backgroundColors.secondary}>
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
          {width: '100%'},
        ]}>
        <View style={[styles.horizontalAlign]}>
          <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
            Configuración de notificaciones
          </Text>
          <Entypo name="chevron-right" size={30} color={colors.primary} />
        </View>
        <View style={[componentStyles.grayLine, styles.mb20]} />
        <View style={[styles.mb40, styles.horizontalAlign]}>
          <View style={{maxWidth: '80%'}}>
            <Text style={[fonts.primarySmall, fontColors.primary, styles.mb20]}>
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
              onValueChange={togglePromos}
              value={promos}
            />
          </View>
        </View>
        <View style={[styles.mb40, styles.horizontalAlign]}>
          <View style={{maxWidth: '80%'}}>
            <Text style={[fonts.primarySmall, fontColors.primary, styles.mb20]}>
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
            onValueChange={toggleEmail}
            value={email}
          />
        </View>
      </ScrollView>
    </View>
  );
}
