import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  ActivityIndicator,
} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../styles/styles';
import fonts from '../../styles/fonts';
import componentStyles from '../../styles/components';
import {backgroundColors, colors, fontColors} from '../../styles/variables';
import {CustomAppIcon} from '../../libs/Custom.App.Icon';
import {useSession} from '../../utils/SessionProvider';

interface EditProfileFormValues {
  name: string;
  email: string;
  birthDate: string;
  phone: string;
}

export default function EditProfileForm(props): JSX.Element {
  const {
    handleSubmit,
    values,
    setFieldValue,
    handleChange,
    handleBlur,
    errors,
    isValid,
    editMsg,
    errorMsg,
    buttonLoading,
  } = props;

  const {birthDate} = useSession();
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [newDate, setNewDate] = useState(birthDate);
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const onDateChange = (event: any, selectedDate: any) => {
    if (event.type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === 'android') {
        toggleCalendar();
        setNewDate(formatDate(currentDate));
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
            style={[fontColors.primary, fonts.primary, styles.mb10]}
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
            style={[fontColors.primary, fonts.primary, styles.mb10]}
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

        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          TU TELEFONO
        </Text>
        <View style={styles.horizontalAlign}>
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
            name="phone"
          />
          {errors.phone && (
            <CustomAppIcon name="invalid" size={20} color={colors.danger} />
          )}
        </View>

        <View style={styles.mb10}>
          <View
            style={[
              !errors.phone
                ? componentStyles.blackLine
                : componentStyles.blackLineDanger,
              ,
              styles.mb10,
            ]}
          />
          {errors.phone && (
            <>
              <Text style={[fontColors.danger, fonts.primary12]}>
                {errors.phone}
              </Text>
            </>
          )}
        </View>

        <Text style={[fonts.secondary, fontColors.primary, styles.mb20]}>
          TU FECHA DE NACIMIENTO
        </Text>

        <Pressable onPress={toggleCalendar}>
          <View style={styles.horizontalAlign}>
            <TextInput
              style={[fontColors.primary, fonts.primary, styles.mb10]}
              value={newDate}
              placeholder="01/01/1999"
              placeholderTextColor={colors.lightGray}
              editable={false}
              onChangeText={setNewDate}
              onPressIn={toggleCalendar}
              name="birthDate"
            />
            {errors.birthDate && (
              <CustomAppIcon name="invalid" size={20} color={colors.danger} />
            )}
          </View>
        </Pressable>

        {showCalendar && (
          <RNDateTimePicker
            mode="date"
            display="default"
            maximumDate={new Date(2023, 31, 12)}
            value={date}
            onChange={onDateChange}
          />
        )}

        <View style={styles.mb60}>
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
        <View style={{marginTop: 'auto', marginBottom: 150}}>
          {editMsg && (
            <View style={[styles.horizontalAlign, styles.horizontalPadding]}>
              <Text
                style={[fontColors.success, fonts.primarySmall, styles.mb10]}>
                {editMsg}
              </Text>
            </View>
          )}
          {errorMsg && (
            <View style={[styles.horizontalAlign, styles.horizontalPadding]}>
              <Text
                style={[fontColors.danger, fonts.primarySmall, styles.mb10]}>
                {errorMsg}
              </Text>
            </View>
          )}
          <View style={{alignItems: 'center'}}>
            <Pressable
              style={[
                componentStyles.secondaryButton,
                styles.mb10,
                !isValid
                  ? backgroundColors.lightGray
                  : backgroundColors.quaternary,
                {maxWidth: 330},
              ]}
              disabled={!isValid || buttonLoading}
              onPress={() => handleSubmit()}>
              {buttonLoading ? (
                <ActivityIndicator size={25} color={colors.primary} />
              ) : (
                <Text
                  style={[
                    fonts.primarySmall,
                    styles.textAlignC,
                    fontColors.primary,
                    {textTransform: 'uppercase'},
                  ]}>
                  Guardar Cambios
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
