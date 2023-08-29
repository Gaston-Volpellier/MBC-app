import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {fontColors} from '../styles/variables';

interface ImageInterface {
  image: NodeRequire;
  title: string;
  altDescription: string;
  imageDescription: string;
}

export default function ImageSection({
  image,
  title,
  altDescription,
  imageDescription,
}: ImageInterface): JSX.Element {
  return (
    <View style={[styles.mb20, styles.horizontalPadding]}>
      <View style={[componentStyles.sectionOptions]}>
        <Text style={[fonts.secondary, fontColors.primary]}>{title}</Text>
        {title !== 'Tienda online' ? (
          <Text style={[fonts.primarySmaller, fontColors.terciary]}>
            Ver todo
          </Text>
        ) : null}
      </View>
      <View style={componentStyles.imageContainer}>
        <Image
          style={[componentStyles.imageFormat]}
          source={image}
          alt={altDescription}
        />
        <View style={componentStyles.imageDescription}>
          <Text style={[fonts.secondarySmaller, fontColors.primary]}>
            {imageDescription}
          </Text>
        </View>
      </View>
    </View>
  );
}
