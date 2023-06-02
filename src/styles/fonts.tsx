import {StyleSheet} from 'react-native';
import {backgroundColors, fontColors} from './variables';

const fonts = StyleSheet.create({
  main: {
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 34,
    textAlign: 'center',
    color: fontColors.primary,
    textTransform: 'uppercase',
    fontFamily: 'Anton',
  },
  primary: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'BreeSerif',
    color: fontColors.primary,
  },
  primaryWhite: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'BreeSerif',
    color: fontColors.secondary,
    textTransform: 'uppercase',
  },
  secondary: {
    fontWeight: '400',
    fontSize: 20,
    // lineHeight: 21,
    textAlign: 'center',
    color: fontColors.primary,
    textTransform: 'uppercase',
    fontFamily: 'Anton',
  },
  secondarySmall: {
    fontWeight: '400',
    fontSize: 20,
    // lineHeight: 21,
    color: fontColors.primary,
    textTransform: 'uppercase',
    fontFamily: 'Anton',
  },
  terciary: {
    fontWeight: '400',
    fontSize: 14,
    // lineHeight: 15,
    color: fontColors.terciary,
    fontFamily: 'BreeSerif',
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});

export default fonts;
