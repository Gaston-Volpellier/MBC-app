import React from 'react';
import {Image, View, Text} from 'react-native';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {fontColors} from '../styles/variables';
import PillComponent from './StatusPill';
import styles from '../styles/styles';

interface ImageInterface {
  image?: NodeRequire;
  imageURL?: string;
  title: string;
  altDescription: string;
  description: string;
  status?: number;
}

export default function ImageSectionAlt({
  image,
  title,
  imageURL,
  altDescription,
  description,
  status,
}: ImageInterface): JSX.Element {
  return (
    <View style={componentStyles.imageContainerLarge}>
      {image ? (
        <Image
          style={[componentStyles.imageFormatAlt]}
          source={image}
          alt={altDescription}
        />
      ) : (
        <Image
          style={[componentStyles.imageFormatAlt]}
          source={{uri: imageURL}}
          alt={altDescription}
        />
      )}
      {status ? (
        <View style={[componentStyles.cardThumbnailPosition]}>
          <PillComponent status={status} />
        </View>
      ) : null}
      <View style={[componentStyles.imageDescription, {alignItems: 'center'}]}>
        <Text
          style={[
            fonts.secondaryLarge,
            styles.textAlignC,
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
