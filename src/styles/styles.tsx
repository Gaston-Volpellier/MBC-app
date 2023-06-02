import {StyleSheet} from 'react-native';
import {backgroundColors} from './variables';

const styles = StyleSheet.create({
  loadingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColors.secondary,
    justifyContent: 'center',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColors.primary,
    paddingBottom: 50,
  },
  horizontalPadding: {
    paddingHorizontal: 30,
  },
  centerContainer: {
    alignItems: 'center',
  },
  homeLogo: {
    height: 90,
    width: 195,
    marginBottom: 61,
  },
  mainLogo: {
    height: 59,
    width: 128,
  },
  loginLogo: {
    marginTop: 50,
    marginBottom: 41,
  },
  loginSection: {
    marginBottom: 30,
  },
  spinner: {
    height: '100%',
    width: '100%',
  },
  pressableText: {
    alignItems: 'center',
  },
  homePadding: {
    paddingTop: 35,
    paddingBottom: 29,
  },
});

export default styles;
