import React from 'react';
import {View, Text, ScrollView, TextInput, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';

export default function RecoveryCode({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="RECUPERÁ TU USUARIO Y/O CONTRASEÑA"
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
        <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
          Por favor ingresá el código que te enviamos por e-mail:
        </Text>

        <View>
          <Text style={[fonts.primaryLarge, fontColors.primary, styles.mb20]}>
            4 4 4 4
          </Text>
        </View>

        <Pressable
          style={[
            componentStyles.secondaryButton,
            backgroundColors.quaternary,
            {marginBottom: 150},
          ]}
          onPress={() => navigation.navigate('PasswordReset')}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            CONTINUAR
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
