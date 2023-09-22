import React, {useState} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {fontColors} from '../styles/variables';
import ImageSectionAlt from './ImageSectionAlt';

export default function Offer(props): JSX.Element {
  const {image, title, description, status, altDescription, pressable} = props;

  return (
    <Pressable onPress={() => pressable} style={styles.mb20}>
      <ImageSectionAlt
        image={require('../../assets/images/' + image)}
        description={description}
        altDescription={altDescription}
        title={title}
        status={status}
      />
    </Pressable>
  );
}
