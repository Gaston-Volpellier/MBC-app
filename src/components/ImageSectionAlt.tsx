import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';

interface ImageInterface {
  image: NodeRequire;
  title: string;
  altDescription: string;
  description: string;
  status?: number;
}

export default function ImageSectionAlt({
  image,
  title,
  altDescription,
  description,
  status,
}: ImageInterface): JSX.Element {
  return (
    <View style={[componentStyles.sectionContainer, styles.horizontalPadding]}>
      <View style={componentStyles.imageContainerLarge}>
        <Image
          style={[componentStyles.imageFormat]}
          source={image}
          alt={altDescription}
        />
        {status ? (
          status == 1 ? (
            <Text
              style={[
                componentStyles.cardThumbnailPill,
                fonts.terciary,
                fontColors.secondary,
                backgroundColors.succsess,
              ]}>
              Activo
            </Text>
          ) : (
            <Text
              style={[
                componentStyles.cardThumbnailPill,
                fonts.terciary,
                fontColors.secondary,
                backgroundColors.danger,
              ]}>
              Vencido
            </Text>
          )
        ) : null}
        <View
          style={[componentStyles.imageDescription, {alignItems: 'center'}]}>
          <Text
            style={[
              fonts.secondaryLarge,
              fontColors.primary,
              {margin: 0, padding: 0},
            ]}>
            {title}
          </Text>
          <Text
            style={[
              fonts.terciary,
              fontColors.primary,
              {margin: 0, padding: 0},
            ]}>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
}
