import React from 'react';
import {View, Text, TextInput, Pressable, Button} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';

interface RecoveryCodeFormValues {
  first: string;
}

const initialValues: RecoveryCodeFormValues = {
  first: '',
};

export default function RecoveryCodeForm(props): JSX.Element {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
            style={[componentStyles.recoveryCodeInput]}
            onChangeText={handleChange('first')}
            onBlur={handleBlur('first')}
            value={values.first}
            inputMode="numeric"
            maxLength={4}
            textContentType="oneTimeCode"
          />

          <Pressable
            style={[
              componentStyles.secondaryButton,
              backgroundColors.quaternary,
              styles.mb20,
              {marginTop: 'auto', maxWidth: 330},
            ]}
            onPress={() => (
              handleSubmit(), props.navigation.navigate('PasswordReset')
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
