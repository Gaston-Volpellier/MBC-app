import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Pressable} from 'react-native';
import HeaderSecondary from '../components/HeaderSecondary';
import componentStyles from '../styles/components';
import EditProfileForm from '../components/form/EditProfileForm';
import {AntDesign} from '../libs/vector-icons';
import styles from '../styles/styles';
import {backgroundColors, colors} from '../styles/variables';
import {Formik} from 'formik';
import {editProfileValidationSchema} from '../utils/validations/FormValidations';
import {useSession} from '../utils/SessionProvider';
import * as api from '../services/api';

interface EditProfileFormValues {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
}

export default function EditProfile({navigation}: Props): JSX.Element {
  const {userName, email, phone, birthDate, idToken, storeUserData} =
    useSession();
  const [errorMsg, setErrorMsg] = useState(null);
  const [editMsg, setEditMsg] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleForm = async values => {
    setButtonLoading(true);
    setErrorMsg(null);
    setEditMsg(null);

    try {
      const response = await api.editProfile(
        idToken,
        values.name,
        values.email,
        values.phone,
        values.birthDate,
      );
      if (!response.error) {
        storeUserData(
          idToken,
          values.name,
          values.email,
          values.birthDate,
          values.phone,
        );
        setButtonLoading(false);
        console.log('edit profile Response: ', response);
        setEditMsg('Perfil actualizado exitosamente!');
      } else {
        console.log('Edit profile Error: ', response);
        setErrorMsg('El perfil no pudo ser actualizado');
      }
    } catch (error) {
      error && setErrorMsg(error);
      setButtonLoading(false);
      console.log('Error editing data:', error);
    }
  };

  const initialValues: EditProfileFormValues = {
    name: userName,
    email: email,
    birthDate: birthDate,
    phone: phone,
  };

  return (
    <SafeAreaView style={backgroundColors.secondary}>
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
        <Formik
          initialValues={initialValues}
          validationSchema={editProfileValidationSchema}
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
            <EditProfileForm
              values={values}
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              isValid={isValid}
              editMsg={editMsg}
              errorMsg={errorMsg}
              buttonLoading={buttonLoading}
            />
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}
