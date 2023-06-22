import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import RegisterForm from './RegisterForm';

export default function Register({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="REGISTRATE"
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
        <RegisterForm />
      </ScrollView>
    </View>
  );
}
