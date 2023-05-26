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
    paddingHorizontal: 30,
    paddingBottom: 34,
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
  loggingLogo: {
    marginTop: 50,
    marginBottom: 41,
  },
  loggingSection: {
    marginBottom: 30,
  },
  spinner: {
    height: '100%',
    width: '100%',
  },
  pressableText: {
    alignItems: 'center',
  },
});

export default styles;
