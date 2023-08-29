import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';
import {Feather} from '../../libs/vector-icons';
import {useSession} from '../../utils/SessionProvider';
import {accessValidationSchema} from '../../utils/validations/FormValidations';
import {CustomAppIcon} from '../../libs/Custom.App.Icon';
import * as api from '../../services/api';
import {storeData} from '../../services/functions';

interface AccessFormValues {
  email: string;
  password: string;
}

const initialValues: AccessFormValues = {
  email: '',
  password: '',
};

export default function AccessForm(props): JSX.Element {
  const {
    setIsAuthenticated,
    setHasAccess,
    storeUserData,
    setEmail,
    setIsAdmin,
    setUserName,
    setIdToken,
  } = useSession();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const handleForm = async values => {
    setLoginError(null);
    try {
      const user = await api.login(values.email, values.password);

      console.log('User object', user);

      if (!user.error) {
        if (user.admin !== null) {
          console.log('Its admin!');
          await storeData('idToken', user.token);
          await storeData('name', user.admin.nombre ? user.admin.nombre : '');
          await storeData('email', user.admin.email);
          await storeData('isAdmin', 1);

          setEmail(user.admin.email);
          setUserName(user.admin.nombre ? user.admin.nombre : '');
          setIdToken(user.token);
          setIsAdmin(1);
          setIsAuthenticated(true);
          setHasAccess(true);
        } else {
          console.log('Its not admin!');

          await storeUserData(
            user.token,
            user.usuario.nombre,
            user.usuario.email,
            user.usuario.fecha_nacimiento,
            user.usuario.telefono,
            user.usuario.google_id,
            user.usuario.not_email,
            user.usuario.not_push,
            user.admin,
          );
          setIsAuthenticated(true);
          setHasAccess(true);
        }
      } else {
        console.log('error logging in: ', user.error);
        setLoginError(user.error);
      }
    } catch (error) {
      console.log('Error registering: ', error);
    }
  };

  return (
    <Formik
      validationSchema={accessValidationSchema}
      initialValues={initialValues}
      onSubmit={values => handleForm(values)}
      validateOnChange={false}
      validateOnBlur={false}>
      {({handleChange, handleBlur, handleSubmit, values, errors, isValid}) => (
        <View>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            POR FAVOR INGRESÁ TU E-MAIL
          </Text>
          <View style={styles.horizontalAlign}>
            <TextInput
              name="email"
              style={[
                fontColors.primary,
                fonts.primary,
                styles.mb10,
                styles.w100,
              ]}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="juan@gomez.com"
              placeholderTextColor={colors.lightGray}
              inputMode="email"
              autoComplete="email"
            />
            {errors.email && (
              <CustomAppIcon name="invalid" size={20} color={colors.danger} />
            )}
          </View>
          <View style={styles.mb10}>
            <View
              style={[
                !errors.email
                  ? componentStyles.blackLine
                  : componentStyles.blackLineDanger,
                styles.mb10,
              ]}
            />
            {errors.email && (
              <>
                <Text style={[fontColors.danger, fonts.primary12]}>
                  {errors.email}
                </Text>
              </>
            )}
          </View>

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
          <View style={styles.mb60}>
            <View
              style={[
                !errors.password
                  ? componentStyles.blackLine
                  : componentStyles.blackLineDanger,
                ,
                styles.mb10,
              ]}
            />
            {errors.password && (
              <Text style={[fontColors.danger, fonts.primary12, styles.mb10]}>
                {errors.password}
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
            {loginError && (
              <View style={[styles.horizontalAlign]}>
                <Text
                  style={[fontColors.danger, fonts.primarySmall, styles.mb10]}>
                  {loginError}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
}
