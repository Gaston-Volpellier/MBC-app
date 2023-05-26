import {PermissionsAndroid, StyleSheet} from 'react-native';
import {backgroundColors} from './variables';

const componentStyles = StyleSheet.create({
  primaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderColor: backgroundColors.terciary,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: backgroundColors.terciary,
    borderRadius: 30,
    alignItems: 'center',
  },
  terciaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderColor: backgroundColors.terciary,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
  },
  whiteButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: backgroundColors.secondary,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 18,
  },
  paddingRegular: {
    paddingBottom: 14,
  },
  headerContainer: {
    width: '100%',
    height: 90,
    backgroundColor: backgroundColors.secondary,

    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
});

export default componentStyles;
