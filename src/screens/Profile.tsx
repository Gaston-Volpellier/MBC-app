import React from 'react';
import {View, Text, ScrollView, Pressable, SafeAreaView} from 'react-native';
import {AntDesign, FontAwesome} from '../libs/vector-icons';
import styles from '../styles/styles';
import fonts from '../styles/fonts';
import componentStyles from '../styles/components';
import {backgroundColors, colors, fontColors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import ImageSectionAlt from '../components/ImageSectionAlt';
import {useSession} from '../utils/SessionProvider';
import {CustomAppIcon} from '../libs/Custom.App.Icon';

export default function Profile(props): JSX.Element {
  const image1 = 'MBC_ofertas4.png';
  const image2 = 'MBC_ofertas5.png';

  const {logout, userName, email, phone, birthDate} = useSession();

  return (
    <SafeAreaView style={backgroundColors.secondary}>
      <HeaderSecondary
        title="Perfil y cuenta"
        iconLeft={
          <Pressable onPress={() => props.navigation.navigate('Settings')}>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
              }}>
              <FontAwesome name="circle" size={40} color={colors.lightGray} />
              <CustomAppIcon
                name="gear"
                size={18}
                color={colors.primary}
                style={{position: 'absolute', zIndex: 99}}
              />
            </View>
          </Pressable>
        }
        iconRight={
          <Pressable onPress={() => props.navigation.goBack()}>
            <AntDesign
              name="closecircle"
              size={34}
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
          <Pressable onPress={() => props.navigation.navigate('Edit_Profile')}>
            <CustomAppIcon name="pen" size={18} color={colors.primary} />
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
          {userName}
        </Text>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <FontAwesome
            name="envelope-o"
            size={22}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text style={[fonts.primarySmall, fontColors.primary]}>{email}</Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <CustomAppIcon
            name="phone"
            size={22}
            color={colors.primary}
            style={{marginEnd: 17}}
          />

          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            {phone ? phone : '- - - -'}
          </Text>
        </View>
        <View
          style={[{flexDirection: 'row', alignItems: 'center'}, styles.mb20]}>
          <CustomAppIcon
            name="bday"
            size={22}
            color={colors.primary}
            style={{marginEnd: 17}}
          />
          <Text
            style={[fonts.primarySmall, styles.textAlignC, fontColors.primary]}>
            {birthDate}
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
          <Pressable onPress={() => logout()}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              CERRAR SESIÓN
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
