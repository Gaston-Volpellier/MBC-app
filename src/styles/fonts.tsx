import {StyleSheet} from 'react-native';

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
  },
  primarySmaller: {
    fontFamily: 'BreeSerif',
    fontWeight: '400',
    fontSize: 14,
  },
  primaryLarge: {
    fontFamily: 'BreeSerif',
    fontWeight: '400',
    fontSize: 20,
  },
  secondary: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 20,
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
  secondaryVeryLarge: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  secondaryMain: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  underlined: {
    textDecorationLine: 'underline',
  },
  lh35: {
    lineHeight: 35,
  },
});

export default fonts;
