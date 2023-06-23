import React from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import styles from '../styles/styles';
import RegisterForm from '../components/form/RegisterForm';

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
