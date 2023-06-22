import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome5,
  Fontisto,
} from '../libs/vector-icons';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import ImageSectionAlt from '../components/ImageSectionAlt';

export default function Profile({navigation}): JSX.Element {
  const image1 = 'MBC_ofertas4.png';
  const image2 = 'MBC_ofertas5.png';

  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="Perfil y cuenta"
        iconLeft={
          <Pressable onPress={() => navigation.navigate('Settings')}>
            <EvilIcons
              name="gear"
              size={35}
              color={colors.terciary}
              style={componentStyles.IconSizeRegular}
            />
          </Pressable>
        }
        iconRight={
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="closecircle"
              size={35}
              color={colors.terciary}
              style={componentStyles.IconSizeRegular}
            />
          </Pressable>
        }
      />
      <ScrollView
        style={[
          componentStyles.mainContainer,
          styles.horizontalPadding,
          backgroundColors.secondary,
        ]}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
            Datos Personales
          </Text>
          <Pressable onPress={() => navigation.navigate('Edit_Profile')}>
            <FontAwesome5 name="pen-alt" size={20} color={colors.primary} />
          </Pressable>
        </View>
        <View style={[componentStyles.grayLine, styles.mb14]} />
        <Text
          style={[
            fonts.primary,
            styles.textAlignC,
            fontColors.terciary,
            styles.mb20,
            {textAlign: 'left'},
          ]}>
          Juan Pablo Gómez
        </Text>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <Fontisto
            name="email"
            size={20}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text style={[fonts.primaryLarge, fontColors.primary]}>
            jpgomez@gmail.com
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <Entypo
            name="phone"
            size={20}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            +54 555 5555
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <Fontisto
            name="person"
            size={20}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            23/12/1987
          </Text>
        </View>
        <View style={[componentStyles.grayLine, styles.mb14]} />
        <Text style={[fonts.secondary, fontColors.primary, {marginBottom: 14}]}>
          Mis Cupones
        </Text>
        <View style={styles.mb20}>
          <View style={styles.mb20}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image1)}
              altDescription="Section image"
              title="20% EN TODOS LOS TRAGOS"
              description="TODOS LOS DÍAS DESDE LAS 18 HS"
              status={1}
            />
          </View>
          <View style={styles.mb20}>
            <ImageSectionAlt
              image={require('../../assets/images/' + image2)}
              altDescription="Section image"
              title="2X1 EN HAMBURGUESAS"
              description="TODOS LOS DÍAS DESDE LAS 19 HS"
              status={2}
            />
          </View>
        </View>
        <View style={[componentStyles.grayLine, styles.mb20]} />
        <View
          style={[
            componentStyles.secondaryButton,
            backgroundColors.lightGray,
            {marginBottom: 150},
          ]}>
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            CERRAR SESIÓN
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
