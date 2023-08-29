import React, {useState} from 'react';
import {Image, View, Text, Pressable, Linking} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';

interface StoresInterface {
  imageURL: String;
  altDescription: string;
  title: string;
  openingHours: string;
  address: string;
  city: string;
  location: string;
  link: string;
}

export default function StoresSection({
  title,
  openingHours,
  address,
  city,
  location,
  imageURL,
  altDescription,
  link,
}: StoresInterface): JSX.Element {
  return (
    <View style={[styles.horizontalPadding, styles.mb20]}>
      <View style={[backgroundColors.darkGray, styles.borderRadius]}>
        <View style={[componentStyles.imageContainer, styles.mb20]}>
          <Image
            style={[componentStyles.imageFormatAlt]}
            source={{uri: imageURL}}
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
        <View style={styles.paddingRegular}>
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
          <Pressable
            style={styles.pressableText}
            onPress={() => Linking.openURL(location)}>
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
          <View style={[styles.mb20, styles.itemsC]}>
            <Pressable
              style={[
                componentStyles.terciaryButton,
                backgroundColors.quaternary,
              ]}
              onPress={() => Linking.openURL(link)}>
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
    </View>
  );
}
