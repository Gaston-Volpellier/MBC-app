import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {Formik} from 'formik';
import componentStyles from '../../styles/components';
import {Feather} from '../../libs/vector-icons';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {useNavigation} from '@react-navigation/native';
import {newPasswordValidationSchema} from '../../utils/validations/FormValidations';
import {CustomAppIcon} from '../../libs/Custom.App.Icon';
import * as api from '../../services/api';
import {useSession} from '../../utils/SessionProvider';

interface RegisterFormValues {
  password: string;
  confirmpassword: string;
}

const initialValues: RegisterFormValues = {
  password: '',
  confirmpassword: '',
};

export default function NewPasswordForm(): JSX.Element {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordMsg, setPasswordMsg] = useState(null);
  const navigation = useNavigation();
  const {passwordCode, setPasswordCode} = useSession();

  const handleForm = async values => {
    setPasswordMsg(null);
    setPasswordError(null);
    try {
      const response = await api.passwordResetByCode(
        passwordCode,
        values.password,
      );

      console.log('Password response', response);

      if (!response.error) {
        setPasswordMsg('Contraseña cambiada con exito!');
        setPasswordCode('');
        navigation.navigate('Access');
      } else {
        console.log('error changing password: ', response.error);
        setPasswordError(response.error);
      }
    } catch (error) {
      console.log('Error registering: ', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newPasswordValidationSchema}
      onSubmit={values => handleForm(values)}
      validateOnChange={false}
      validateOnBlur={false}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
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
              name="password"
            />
            {errors.password && (
              <CustomAppIcon name="invalid" size={20} color={colors.danger} />
            )}
            <Pressable onPress={() => setPasswordVisible(!passwordVisible)}>
              <Feather
                name={passwordVisible ? 'eye' : 'eye-off'}
                color={colors.primary}
                size={25}
                style={{marginEnd: 5}}
              />
            </Pressable>
          </View>
          <View>
            <View
              style={[
                !errors.password
                  ? componentStyles.blackLine
                  : componentStyles.blackLineDanger,
                styles.mb14,
              ]}
            />
            {errors.password && (
              <>
                <Text style={[fontColors.danger, fonts.primary12, styles.mb10]}>
                  {errors.password}
                </Text>
              </>
            )}
          </View>

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
              name="confirmpassword"
            />
            {errors.confirmpassword && (
              <CustomAppIcon name="invalid" size={20} color={colors.danger} />
            )}

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
          <View style={styles.mb10}>
            <View
              style={[
                !errors.confirmpassword
                  ? componentStyles.blackLine
                  : componentStyles.blackLineDanger,
                ,
                styles.mb10,
              ]}
            />
            {errors.confirmpassword && (
              <>
                <Text style={[fontColors.danger, fonts.primary12]}>
                  {errors.confirmpassword}
                </Text>
              </>
            )}
          </View>
          <View style={{marginBottom: 150}}>
            <Pressable
              style={[
                componentStyles.secondaryButton,
                !isValid
                  ? backgroundColors.lightGray
                  : backgroundColors.quaternary,
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
            {passwordMsg && (
              <View style={[styles.horizontalAlign]}>
                <Text
                  style={[fontColors.success, fonts.primarySmall, styles.mb10]}>
                  {passwordMsg}
                </Text>
              </View>
            )}
            {passwordError && (
              <View style={[styles.horizontalAlign]}>
                <Text
                  style={[fontColors.danger, fonts.primarySmall, styles.mb10]}>
                  {passwordError}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
}
