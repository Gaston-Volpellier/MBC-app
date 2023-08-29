import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import {MaterialCommunityIcons} from '../libs/vector-icons';

export default function ScanCoupon(props): JSX.Element {
  // Reemplazar por la camara
  const qrImage = require(`../../assets/images/QR_icon_success.png`);

  return (
    <SafeAreaView
      style={[
        backgroundColors.primary,
        styles.horizontalPadding,
        {paddingTop: 30, height: '100%'},
      ]}>
      <View style={[styles.centerContainer, styles.mb60]}>
        <Image
          source={require('../../assets/images/MBC_logo_white.png')}
          style={{width: 120, height: 65}}
        />
      </View>
      <ScrollView>
        <View
          style={[
            componentStyles.mainContainer,
            styles.mb60,
            {height: '100%'},
          ]}>
          <View>
            <View>
              <Image
                style={[
                  styles.mb40,
                  {
                    alignSelf: 'center',
                    height: 300,
                    width: 250,
                    tintColor: colors.secondary,
                  },
                ]}
                source={qrImage}
              />
            </View>
          </View>
          <Pressable
            style={[
              componentStyles.secondaryButton,
              styles.horizontalPadding,
              backgroundColors.quaternary,
              styles.mb10,
            ]}
            onPress={() => props.navigation.navigate('AdminView')}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
                {textTransform: 'uppercase'},
              ]}>
              Volver
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
