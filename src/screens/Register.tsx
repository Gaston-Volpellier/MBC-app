import React, {useState} from 'react';
import {View, ScrollView, Pressable} from 'react-native';
import componentStyles from '../styles/components';
import {backgroundColors, colors} from '../styles/variables';
import HeaderSecondary from '../components/HeaderSecondary';
import {AntDesign} from '../libs/vector-icons';
import styles from '../styles/styles';
import RegisterForm from '../components/form/RegisterForm';
import {Formik} from 'formik';
import {registerValidationSchema} from '../utils/validations/FormValidations';
import * as api from '../services/api';
import {hashPassword} from '../services/functions';

interface RegisterFormValues {
  name: string;
  email: string;
  birthDate: string;
  password: string;
  confirmpassword: string;
}

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  birthDate: '',
  password: '',
  confirmpassword: '',
};

export default function Register({navigation}: Props): JSX.Element {
  const [registerError, setRegisterError] = useState(null);

  const handleForm = async values => {
    setRegisterError(null);
    const email = values.email;
    try {
      const register = await api.register(
        values.name,
        email,
        values.birthDate,
        values.password,
      );

      if (register?.error == false) {
        navigation.navigate('Success', {email: email});
      } else {
        setRegisterError(register.msg);
      }
    } catch (error) {
      console.log('Error registering: ', error);
    }
  };

  return (
    <View style={backgroundColors.secondary}>
      <HeaderSecondary
        title="REGISTRATE"
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
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={values => handleForm(values)}
          validateOnChange={false}
          validateOnBlur={false}>
          {({
            handleSubmit,
            values,
            setFieldValue,
            handleChange,
            handleBlur,
            errors,
            isValid,
          }) => (
            <RegisterForm
              values={values}
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              isValid={isValid}
              registerError={registerError}
            />
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
