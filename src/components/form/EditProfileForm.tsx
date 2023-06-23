import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Button} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Formik} from 'formik';
import {Feather} from '../../libs/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface EditProfileFormValues {
  name: string;
  email: string;
  birthdate: any;
  phone: string;
}

const initialValues: EditProfileFormValues = {
  name: '',
  email: '',
  birthdate: '',
  phone: '',
};

export default function EditProfileForm(props): JSX.Element {
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

          <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
            TU TELEFONO
          </Text>
          <TextInput
            style={[fontColors.primary, fonts.primary, styles.mb10]}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            placeholder="+54 5555 5555"
            placeholderTextColor={colors.lightGray}
            autoComplete="tel-country-code"
            inputMode="tel"
            maxLength={20}
          />

          <View style={[componentStyles.blackLine, styles.mb20]} />

          <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
            TU FECHA DE NACIMIENTO
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
                {textTransform: 'uppercase'},
              ]}>
              Guardar Cambios
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}
