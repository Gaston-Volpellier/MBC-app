import {StyleSheet} from 'react-native';
import {fontColors} from './variables';

const fonts = StyleSheet.create({
  mainFont: {
    fontWeight: '400',
    fontSize: 30,
    lineHeight: 34,
    textAlign: 'center',
    color: fontColors.primary,
    textTransform: 'uppercase',
    fontFamily: 'Anton',
  },
  primaryFont: {
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Bree Serif',
    color: fontColors.primary,
  },
  primaryWhiteFont: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Bree Serif',
    color: fontColors.secondary,
    textTransform: 'uppercase',
  },
  underlined: {
    textDecorationLine: 'underline',
  },
});

export default fonts;
