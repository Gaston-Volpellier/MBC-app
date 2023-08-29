import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Button} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';
import {recoveryValidationSchema} from '../../utils/validations/FormValidations';
import {CustomAppIcon} from '../../libs/Custom.App.Icon';
import * as api from '../../services/api';

interface RecoveryFormValues {
  email: string;
}

const initialValues: RecoveryFormValues = {
  email: '',
};

export default function RecoveryForm(props): JSX.Element {
  const [errorMsg, setErrorMsg] = useState(null);

  const handleForm = async values => {
    setErrorMsg(null);
    try {
      const response = await api.passwordRecover(values.email);

      console.log('Password recover response: ', response);

      if (!response.error) {
        props.navigation.navigate('RecoveryCode');
      } else {
        console.log('Error Finding email: ', response.error);
        setErrorMsg(response.error);
      }
    } catch (error) {
      console.log('Error Recovering email: ', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={recoveryValidationSchema}
      onSubmit={values => handleForm(values)}
      validateOnChange={false}
      validateOnBlur={false}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            TU E-MAIL
          </Text>
          <View style={styles.horizontalAlign}>
            <TextInput
              style={[fontColors.primary, fonts.primary, styles.mb10]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="juan@gomez.com"
              placeholderTextColor={colors.lightGray}
              inputMode="email"
              autoComplete="email"
              name="email"
            />
            {errors.email && (
              <CustomAppIcon name="invalid" size={20} color={colors.danger} />
            )}
          </View>
          <View style={styles.mb60}>
            <View
              style={[
                !errors.email
                  ? componentStyles.blackLine
                  : componentStyles.blackLineDanger,
              ]}
            />
            {errors.email && (
              <Text style={[fontColors.danger, fonts.primary12]}>
                {errors.email}
              </Text>
            )}
          </View>
          <View>
            <Pressable
              style={[
                componentStyles.secondaryButton,
                !isValid
                  ? backgroundColors.lightGray
                  : backgroundColors.quaternary,
                styles.mb20,
                {marginTop: 'auto', maxWidth: 330},
              ]}
              disabled={!isValid}
              onPress={() => handleSubmit()}>
              <Text
                style={[
                  fonts.primarySmall,
                  styles.textAlignC,
                  fontColors.primary,
                ]}>
                CONTINUAR
              </Text>
            </Pressable>
            {errorMsg && (
              <Text style={[fontColors.danger, fonts.primary12]}>
                {errorMsg}
              </Text>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
}
