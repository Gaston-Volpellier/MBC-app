import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, fontColors} from '../styles/variables';
import PillComponent from './StatusPill';

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
    <View style={componentStyles.imageContainerLarge}>
      <Image
        style={[componentStyles.imageFormat]}
        source={image}
        alt={altDescription}
      />
      {status ? (
        <View style={[componentStyles.cardThumbnailPosition]}>
          <PillComponent status={status} />
        </View>
      ) : null}
      <View style={[componentStyles.imageDescription, {alignItems: 'center'}]}>
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
            fonts.primarySmaller,
            fontColors.primary,
            {margin: 0, padding: 0, marginBottom: 3},
          ]}>
          {description}
        </Text>
      </View>
    </View>
  );
}
