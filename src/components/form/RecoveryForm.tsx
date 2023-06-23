import React from 'react';
import {View, Text, TextInput, Pressable, Button} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';

interface RecoveryFormValues {
  email: string;
}

const initialValues: RecoveryFormValues = {
  email: '',
};

export default function RecoveryForm(props): JSX.Element {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            TU E-MAIL
          </Text>
          <TextInput
            style={[fontColors.primary, fonts.primary, styles.mb10]}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="juan@gomez.com"
            placeholderTextColor={colors.lightGray}
            inputMode="email"
            autoComplete="email"
          />

          <View style={[componentStyles.blackLine, {marginBottom: 80}]} />

          <Pressable
            style={[
              componentStyles.secondaryButton,
              backgroundColors.quaternary,
              styles.mb20,
              {marginTop: 'auto', maxWidth: 330},
            ]}
            onPress={() => (
              handleSubmit(), props.navigation.navigate('RecoveryCode')
            )}>
            <Text
              style={[
                fonts.primarySmall,
                styles.textAlignC,
                fontColors.primary,
              ]}>
              CONTINUAR
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}
