import * as yup from 'yup';

export const accessValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Ingrese su Email'),
  password: yup
    .string()
    // .min(8, ({min}) => `La contraseña debe ser de al menos ${min} caracteres`)
    .required('Ingrese su contraseña'),
});

export const recoveryValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Ingrese su Email'),
});

export const newPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => `La contraseña debe ser de al menos ${min} caracteres`)
    .required('Ingrese su contraseña'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'La contraseña debe coincidir')
    .required('Ingrese su contraseña nuevamente'),
});

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({min}) => `El nombre debe ser de al menos ${min} caracteres`)
    .required('Ingrese su Nombre'),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Ingrese su Email'),
  password: yup
    .string()
    .min(8, ({min}) => `La contraseña debe ser de al menos ${min} caracteres`)
    .max(12, ({max}) => `La contraseña debe ser de hasta ${max} caracteres`)
    .matches(/(?=.*[a-z])(?=.*[A-Z])/, 'Debe incluir minúsculas y mayúsculas')
    .required('Ingrese su contraseña'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'La contraseña debe coincidir')
    .required('Ingrese su contraseña nuevamente'),
  birthDate: yup.string().required('Ingresa tu fecha de nacimiento'),
});

export const editProfileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({min}) => `El nombre debe ser de al menos ${min} caracteres`)
    .required('Ingrese su Nombre'),
  email: yup
    .string()
    .email('Por favor ingrese un email valido')
    .required('Ingrese su Email'),
  phone: yup
    .string()
    .min(7, 'El número debe ser de al menos 6 digitos.')
    .max(15, 'El número debe ser de hasta 15 digitos.'),
  birthDate: yup.string().required('Ingresa tu fecha de nacimiento'),
});
