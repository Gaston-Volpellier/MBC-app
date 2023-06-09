import {StyleSheet} from 'react-native';
import {backgroundColors, colors} from './variables';

const componentStyles = StyleSheet.create({
  primaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderColor: colors.primary,
    backgroundColor: colors.quaternary,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignItems: 'center',
  },
  terciaryButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  whiteButton: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    backgroundColor: colors.secondary,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 18,
  },
  navigationContainer: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 23,
    left: 30,
    right: 30,
    borderRadius: 20,
    height: 83,
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    paddingBottom: 50,
  },
  headerContainer: {
    width: '100%',
    height: 90,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    overflow: 'hidden',
    paddingTop: 50,
    paddingBottom: 170,
  },
  sectionContainer: {
    width: '100%',
    marginBottom: 40,
  },
  sectionSizeLarge: {
    height: 417,
  },
  sectionOptions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 14,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  imageContainerLarge: {
    width: '100%',
    height: 220,
    borderRadius: 20,
  },
  imageFormat: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    position: 'relative',
  },
  imageFormatAlt: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
  },
  imageDescription: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.quaternary,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageTitle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.quaternary,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardThumbnailPosition: {
    position: 'absolute',
    top: 25,
    left: 40,
  },

  cardThumbnailPositionRight: {
    position: 'absolute',
    top: 25,
    right: 40,
  },
  cardThumbnailCentral: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -60}, {translateY: -20}],
  },

  cardThumbnailPill: {
    borderRadius: 14,
    textTransform: 'uppercase',
    paddingVertical: 6,
    paddingHorizontal: 12,
    minWidth: 103,
    textAlign: 'center',
  },
  bottomLableFont: {
    fontFamily: 'Anton',
    fontWeight: '400',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  drawerStyle: {
    width: '100%',
    backgroundColor: colors.secondary,
  },
  modalOverlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.terciary,
    overflow: 'hidden',
  },
  modalView: {
    backgroundColor: colors.quaternary,
    width: '100%',
    maxHeight: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal: 30,
    paddingBottom: 36,
  },
  qrModalContainer: {
    paddingTop: 14,
    paddingHorizontal: 31,
  },
  QRContainer: {

    backgroundColor: colors.lightGray,
    padding: 23,
    marginBottom: 13,
    alignItems: 'center',
    borderRadius: 10,

  },
  QRFormat: {
    height: 171,
    width: 171,
  },

  CheckIcon: {
    height: 71,
    width: 71,
  },
  IconSizeRegular: {
    height: 35,
  },
  IconSizeLarge: {
    height: 41,
  },

  backDrop: {
    backgroundColor: colors.backdrop,
    flex: 1,
  },

  backDropBlack: {
    backgroundColor: colors.black,
    flex: 1,
  },

  grayLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.lightGray,
  },
  blackLine: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: colors.primary,
  },
  switchSize: {
    transform: [{scaleX: 1.2}, {scaleY: 1.2}],
  },

  popupContainer: {
    width: 330,
    borderRadius: 20,
    overflow: 'hidden',
  },
  recoveryCodeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recoveryCodeInput: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },

});

export default componentStyles;
