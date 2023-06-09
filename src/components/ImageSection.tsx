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
    <View style={[componentStyles.sectionContainer, styles.horizontalPadding]}>
      <View style={[componentStyles.sectionOptions]}>
        <Text style={[fonts.secondary, fontColors.primary]}>{title}</Text>
        <Text style={[fonts.terciary, fontColors.terciary]}>Ver todo</Text>
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
