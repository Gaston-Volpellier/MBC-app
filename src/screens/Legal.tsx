import React from 'react';
import {SafeAreaView, Text, ScrollView, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import {useSession} from '../utils/SessionProvider';

export default function Legal({navigation}): JSX.Element {
  const {socialData} = useSession();

  return (
    <SafeAreaView style={[backgroundColors.secondary, {flex: 1}]}>
      <HeaderSecondary
        title="Legales"
        iconRight={
          <Pressable onPress={() => navigation.goBack()}>
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
        ]}>
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.primary,
            {textAlign: 'auto', marginBottom: 50},
          ]}>
          { socialData['terminos'] }
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
