import React from 'react';
import {Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import {useSession} from '../utils/SessionProvider';

export default function Privacy(props): JSX.Element {
  const {socialData} = useSession();

  return (
    <SafeAreaView style={[backgroundColors.secondary, {flex: 1}]}>
      <HeaderSecondary
        title="Politicas de privacidad"
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
        ]}>
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            styles.mb50,
            fontColors.primary,
            {textAlign: 'auto'},
          ]}>
            {socialData['politicas']}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
