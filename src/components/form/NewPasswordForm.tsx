import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {Formik} from 'formik';
import componentStyles from '../../styles/components';
import {Feather} from '../../libs/vector-icons';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {useNavigation} from '@react-navigation/native';

interface RegisterFormValues {
  password: string;
  confirmpassword: string;
}

const initialValues: RegisterFormValues = {
  password: '',
  confirmpassword: '',
};

export default function NewPasswordForm(props: Props): JSX.Element {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
        navigation.navigate('Access');
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
            Por favor ingresá tu nueva contraseña
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

          <View style={[componentStyles.blackLine, styles.mb14]} />

          <View style={[styles.mb20]}>
            <Text style={[fonts.primary12, fontColors.primary]}>
              Debe tener entre 8 y 12 caracteres
            </Text>
            <Text style={[fonts.primary12, fontColors.primary]}>
              Debe incluir minúsculas y mayúsculas
            </Text>
          </View>

          <Text style={[fonts.secondary, fontColors.primary, styles.mb14]}>
            CONFIRMÁ TU CONTRASEÑA
          </Text>
          <View style={styles.horizontalAlign}>
            <TextInput
              style={[
                fontColors.primary,
                fonts.primary,
                styles.mb10,
                {width: '80%'},
              ]}
              onChangeText={handleChange('confirmpassword')}
              onBlur={handleBlur('confirmpassword')}
              value={values.confirmpassword}
              placeholder="************"
              placeholderTextColor={colors.lightGray}
              secureTextEntry={!confirmPasswordVisible}
            />
            <Pressable
              onPress={() =>
                setConfirmPasswordVisible(!confirmPasswordVisible)
              }>
              <Feather
                name={confirmPasswordVisible ? 'eye' : 'eye-off'}
                color={colors.primary}
                size={25}
                style={{marginEnd: 5}}
              />
            </Pressable>
          </View>

          <View style={[componentStyles.blackLine, styles.mb20]} />

          <Pressable
            style={[
              componentStyles.secondaryButton,
              backgroundColors.quaternary,
              {marginTop: 'auto', marginBottom: 150, maxWidth: 330},
            ]}
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
        </View>
      )}
    </Formik>
  );
}
