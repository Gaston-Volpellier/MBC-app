import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Platform} from 'react-native';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {Feather} from '../../libs/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {CustomAppIcon} from '../../libs/Custom.App.Icon';

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

export default function RegisterForm(props): JSX.Element {
  const {
    handleSubmit,
    values,
    setFieldValue,
    handleChange,
    handleBlur,
    errors,
    isValid,
    registerError,
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState('');

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    if (event.type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleCalendar();
        setBirthDate(formatDate(currentDate));
        setFieldValue('birthDate', formatDate(currentDate));
      }
    } else {
      toggleCalendar();
    }
  };

  const formatDate = (rawDate: Date) => {
    const date = new Date(rawDate);
    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${day}/${month}/${year}`;
  };

  return (
    <View>
      <View>
        <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
          TU NOMBRE
        </Text>
        <View style={styles.horizontalAlign}>
          <TextInput
            style={[
              fontColors.primary,
              fonts.primary,
              styles.mb10,
              styles.w100,
            ]}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            placeholder="Juan Gomez"
            placeholderTextColor={colors.lightGray}
            autoComplete="name"
            maxLength={50}
          />
          {errors.name && (
            <CustomAppIcon name="invalid" size={20} color={colors.danger} />
          )}
        </View>

        <View style={styles.mb10}>
          <View
            style={[
              !errors.name
                ? componentStyles.blackLine
                : componentStyles.blackLineDanger,
              ,
              styles.mb10,
            ]}
          />
          {errors.name && (
            <>
              <Text style={[fontColors.danger, fonts.primary12]}>
                {errors.name}
              </Text>
            </>
          )}
        </View>

        <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
          TU E-MAIL
        </Text>
        <View style={styles.horizontalAlign}>
          <TextInput
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
              ,
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
          FECHA DE NACIMIENTO
        </Text>
        <Pressable onPress={toggleCalendar}>
          <View style={styles.horizontalAlign}>
            <TextInput
              style={[fontColors.primary, fonts.primary, styles.mb10]}
              value={birthDate}
              placeholder="01/01/1999"
              placeholderTextColor={colors.lightGray}
              editable={false}
              onChange={date => setFieldValue('birthDate', date)}
              onChangeText={setBirthDate}
              onPressIn={toggleCalendar}
            />
            {errors.birthDate && (
              <CustomAppIcon name="invalid" size={20} color={colors.danger} />
            )}
          </View>
        </Pressable>
        {showCalendar && (
          <RNDateTimePicker
            mode="date"
            maximumDate={new Date(2023, 31, 12)}
            value={date}
            onChange={onDateChange}
          />
        )}

        <View style={styles.mb10}>
          <View
            style={[
              !errors.birthDate
                ? componentStyles.blackLine
                : componentStyles.blackLineDanger,
              ,
              styles.mb10,
            ]}
          />
          {errors.birthDate && (
            <>
              <Text style={[fontColors.danger, fonts.primary12]}>
                {errors.birthDate}
              </Text>
            </>
          )}
        </View>

        <Text style={[fonts.primary12, fontColors.primary, styles.mb40]}>
          Debes tener al menos 18 años para ingresar
        </Text>

        <Text style={[fonts.secondary, fontColors.primary, styles.mb10]}>
          CONTRASEÑA
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
          {errors.confirmpassword && (
            <CustomAppIcon name="invalid" size={20} color={colors.danger} />
          )}
          <Pressable
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <Feather
              name={confirmPasswordVisible ? 'eye' : 'eye-off'}
              color={colors.primary}
              size={25}
              style={{marginEnd: 5}}
            />
          </Pressable>
        </View>

        <View style={styles.mb60}>
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

        <View
          style={{
            marginTop: 'auto',
            marginBottom: 160,
            maxWidth: 330,
          }}>
          <Pressable
            style={[
              componentStyles.secondaryButton,
              styles.mb10,
              !isValid
                ? backgroundColors.lightGray
                : backgroundColors.quaternary,
            ]}
            disabled={!isValid}
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
          {registerError && (
            <View style={[styles.horizontalAlign]}>
              <Text style={[fontColors.danger, fonts.primarySmaller]}>
                {`Error al registrar: ${registerError}`}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
