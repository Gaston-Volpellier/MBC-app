import {StyleSheet} from 'react-native';
import {backgroundColors, fontColors} from './variables';

const fonts = StyleSheet.create({
  primary: {
    fontFamily: 'BreeSerif',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
  },
  primarySmall: {
    fontFamily: 'BreeSerif',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  secondary: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  secondarySmall: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  secondarySmaller: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  secondaryLarge: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  secondaryMain: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: 35,
  },
  terciary: {
    fontFamily: 'BreeSerif',
    fontWeight: '400',
    fontSize: 14,
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});

export default fonts;
