import React from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import HeaderSecondary from '../components/HeaderSecondary';
import componentStyles from '../styles/components';
import EditProfileForm from '../components/form/EditProfileForm';
import {AntDesign} from '../libs/vector-icons';
import styles from '../styles/styles';
import {backgroundColors, colors} from '../styles/variables';

export default function EditProfile({navigation}: Props): JSX.Element {
  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="EDITAR PERFIL"
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
        <EditProfileForm />
      </ScrollView>
    </View>
  );
}
