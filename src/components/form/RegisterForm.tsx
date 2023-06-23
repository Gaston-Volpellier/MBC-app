import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Button} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';
import {Feather} from '../../libs/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface RegisterFormValues {
  name: string;
  email: string;
  birthdate: any;
  password: string;
  confirmpassword: string;
}

const initialValues: RegisterFormValues = {
  name: '',
  email: '',
  birthdate: '',
  password: '',
  confirmpassword: '',
};

export default function RegisterForm(props): JSX.Element {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState('Empty');
  const [showCalendar, setShowCalendar] = useState(false);

  const onBirthDayChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    let tempDate = new Date(currentDate);
    setText(
      tempDate.getDate() +
        '/' +
        (tempDate.getMonth() + 1) +
        '/' +
        tempDate.getFullYear(),
    );
    setShowCalendar(false);
    console.log('Date: ', tempDate);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            TU NOMBRE
          </Text>
          <TextInput
            style={[fontColors.primary, fonts.primary, styles.mb10]}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Juan Gomez"
            placeholderTextColor={colors.lightGray}
            autoComplete="name"
            maxLength={50}
          />
          <View style={[componentStyles.blackLine, styles.mb20]} />

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

          <View style={[componentStyles.blackLine, styles.mb20]} />

          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            FECHA DE NACIMIENTO
          </Text>
          <Pressable onPress={() => setShowCalendar(true)}>
            <Text style={[fontColors.primary, fonts.primary, styles.mb10]}>
              {text}
            </Text>
            <TextInput
              style={[fontColors.primary, fonts.primary, styles.mb10]}
              value={values.birthdate}
              placeholder="01/01/1999"
              placeholderTextColor={colors.lightGray}
            />
          </Pressable>
          {showCalendar && (
            <RNDateTimePicker
              mode="date"
              maximumDate={new Date(2023, 31, 12)}
              themeVariant="light"
              value={date}
              onChange={onBirthDayChange}
              testID="cumpleanios"
            />
          )}

          <View style={[componentStyles.blackLine, styles.mb14]} />

          <Text style={[fonts.primary12, fontColors.primary, styles.mb40]}>
            Debes tener al menos 18 años para ingresar
          </Text>

          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
            CONTRASEÑA
          </Text>
          <View style={styles.horizontalAlign}>
            <TextInput
              style={[fontColors.primary, fonts.primary, styles.mb10]}
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

          <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
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

          <View style={[componentStyles.blackLine, {marginBottom: 80}]} />
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
              Registrate
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}
