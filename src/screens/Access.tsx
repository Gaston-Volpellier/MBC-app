import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {useNavigation} from '@react-navigation/native';
import {AntDesign, EvilIcons} from '../libs/vector-icons';

export default function Access(props): JSX.Element {
  const authenticate = props.authenticate;
  const navigation = useNavigation();

  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="ACCEDÉ A TU CUENTA"
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
        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          POR FAVOR INGRESÁ TU E-MAIL
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          juan@lopez.com
        </Text>

        <View style={[componentStyles.blackLine, styles.mb30]} />

        <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
          POR FAVOR INGRESÁ TU CONTRASEÑA
        </Text>
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          ***********
        </Text>

        <View style={[componentStyles.blackLine, styles.mb20]} />

        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 150}}>
          <Pressable
            style={[
              componentStyles.secondaryButton,
              backgroundColors.quaternary,
              {marginBottom: 25},
            ]}
            onPress={() => authenticate(true)}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              CONTINUAR
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Recovery')}>
            <Text
              style={[
                fonts.primarySmall,
                fontColors.primary,
                styles.mb20,
                fonts.underlined,
              ]}>
              ¿Olvidaste tu usuario o contraseña?
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
