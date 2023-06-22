import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {AntDesign, Entypo} from '../libs/vector-icons';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';

export default function Settings({navigation}): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="Ajustes"
        iconRight={
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="closecircle"
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
        ]}>
        <Text style={[fonts.secondary, fontColors.primary, styles.mb30]}>
          Gestionar
        </Text>

        <View style={[styles.horizontalAlign, styles.mb20]}>
          <Text style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
            Ubicacion
          </Text>
          <Entypo name="chevron-right" size={20} color={colors.primary} />
        </View>

        <View style={[componentStyles.grayLine, styles.mb20]} />
        <Pressable onPress={() => navigation.navigate('Notifications')}>
          <View style={[styles.horizontalAlign, styles.mb20]}>
            <Text
              style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
              Notificaciones
            </Text>
            <Entypo name="chevron-right" size={20} color={colors.primary} />
          </View>
        </Pressable>

        <View style={[componentStyles.grayLine, styles.mb20]} />

        <Pressable onPress={() => navigation.navigate('Delete_Account')}>
          <View style={[styles.horizontalAlign, styles.mb20]}>
            <Text
              style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
              Borrar Cuenta
            </Text>
            <Entypo name="chevron-right" size={20} color={colors.primary} />
          </View>
        </Pressable>

        <View style={[componentStyles.grayLine, styles.mb50]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb30]}>
          Legales
        </Text>

        <Pressable onPress={() => navigation.navigate('Legal')}>
          <View style={[styles.horizontalAlign, styles.mb20]}>
            <Text
              style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
              Términos y Condiciones
            </Text>
            <Entypo name="chevron-right" size={20} color={colors.primary} />
          </View>
        </Pressable>

        <View style={[componentStyles.grayLine, styles.mb20]} />

        <Pressable onPress={() => navigation.navigate('Privacy')}>
          <View style={[styles.horizontalAlign, styles.mb20]}>
            <Text
              style={[fonts.primary, styles.textAlignC, fontColors.primary]}>
              Política de privacidad
            </Text>
            <Entypo name="chevron-right" size={20} color={colors.primary} />
          </View>
        </Pressable>

        <View style={[componentStyles.grayLine, styles.mb20]} />
      </ScrollView>
    </View>
  );
}
