import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#000000',
  secondary: '#FFFFFF',
  terciary: '#FA821E',
  terciaryLight: '#FFE8D4',
  quaternary: '#F0BE1E',
  gray: '#A9A9A9',
  darkGray: '#1F1F1F',
  lightGray: '#E3E3E3',
  lightGrayAlt: '#E4E4E4',
  success: '#1BA048',
  danger: '#CB1A1A',
  backdrop: 'rgba(243, 243, 243, 0.96)',
  black: '#020202',
};

export const backgroundColors = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  terciary: {
    backgroundColor: colors.terciary,
  },
  quaternary: {
    backgroundColor: colors.quaternary,
  },
  darkGray: {
    backgroundColor: colors.darkGray,
  },
  succsess: {
    backgroundColor: colors.success,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  lightGray: {
    backgroundColor: colors.lightGray,
  },
});

export const fontColors = StyleSheet.create({
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  terciary: {
    color: colors.terciary,
  },
  quaternary: {
    color: colors.quaternary,
  },
  danger: {
    color: colors.danger,
  },
  lightGray: {
    color: '#CCCCCC',
  },
});
