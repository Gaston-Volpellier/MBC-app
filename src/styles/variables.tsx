import {StyleSheet} from 'react-native';

export const colors = {
  //black
  primary: '#000000',
  //white
  secondary: '#FFFFFF',
  //orange
  terciary: '#FA821E',
  //yellow
  quaternary: '#F0BE1E',
  darkGray: '#1F1F1F',
  success: '#1BA048',
  danger: '#CB1A1A',
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
});
