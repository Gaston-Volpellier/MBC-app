import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Button} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';
import {Feather} from '../../libs/vector-icons';

interface AccessFormValues {
  email: string;
  password: string;
}

const initialValues: AccessFormValues = {
  email: '',
  password: '',
};

export default function AccessForm(props): JSX.Element {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            POR FAVOR INGRESÁ TU E-MAIL
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

          <View style={[componentStyles.blackLine, styles.mb20]} />

          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            POR FAVOR INGRESÁ TU CONTRASEÑA
          </Text>
          <View style={styles.horizontalAlign}>
            <TextInput
              style={[
                fontColors.primary,
                fonts.primary,
                styles.mb10,
                {width: '80%'},
              ]}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="************"
              placeholderTextColor={colors.lightGray}
              secureTextEntry={!passwordVisible}
            />
            <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather
                name={passwordVisible ? 'eye' : 'eye-off'}
                color={colors.primary}
                size={25}
                style={{marginEnd: 5}}
              />
            </Pressable>
          </View>

          <View style={[componentStyles.blackLine, {marginBottom: 80}]} />
          <Pressable
            style={[
              componentStyles.secondaryButton,
              backgroundColors.quaternary,
              styles.mb20,
              {marginTop: 'auto', maxWidth: 330},
            ]}
            onPress={() => (handleSubmit(), props.authenticate(true))}>
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
