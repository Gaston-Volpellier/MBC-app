import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {useNavigation} from '@react-navigation/native';
import {AntDesign, EvilIcons} from '../libs/vector-icons';
import AccessForm from '../components/form/AccessForm';

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
        <AccessForm authenticate={authenticate} />
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
      </ScrollView>
    </View>
  );
}
