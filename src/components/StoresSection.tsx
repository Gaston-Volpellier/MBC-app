import React, {useState} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';

interface StoresInterface {
  image: NodeRequire;
  altDescription: string;
  title: string;
  openingHours: string;
  address: string;
  city: string;
  location: string;
}

export default function StoresSection({
  image,
  title,
  openingHours,
  address,
  city,
  location,
  altDescription,
}: StoresInterface): JSX.Element {
  return (
    <View
      style={[
        componentStyles.sectionContainer,
        styles.horizontalPadding,
        componentStyles.sectionSizeLarge,
        {marginBottom: 65},
      ]}>
      <View style={[backgroundColors.darkGray, styles.borderRadius]}>
        <View style={[componentStyles.imageContainer, {marginBottom: 24}]}>
          <Image
            style={[componentStyles.imageFormatAlt]}
            source={image}
            alt={altDescription}
          />
          <View style={componentStyles.imageTitle}>
            <Text
              style={[
                fonts.secondaryLarge,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              {title}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[
              fonts.secondarySmall,
              fontColors.secondary,
              styles.textAlignC,
              {marginBottom: 7},
            ]}>
            {openingHours}
          </Text>
          <Text
            style={[fonts.primary, styles.textAlignC, fontColors.secondary]}>
            {address}
          </Text>
          <Text
            style={[
              fonts.primary,
              styles.textAlignC,
              fontColors.secondary,
              {marginBottom: 16},
            ]}>
            {city}
          </Text>
          <Pressable style={styles.pressableText}>
            <Text
              style={[
                fonts.primary,
                styles.textAlignC,
                fontColors.quaternary,
                fonts.underlined,
                {marginBottom: 17},
              ]}>
              VER EN MAPA
            </Text>
          </Pressable>
          <Pressable
            style={[
              componentStyles.terciaryButton,
              backgroundColors.quaternary,
              ,
              {marginBottom: 24, marginHorizontal: 24},
            ]}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              RESERVÁ MESA
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
