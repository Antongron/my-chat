import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  email: yup.string().email('Email has incorrect format!').defined('Email has been typed!'),
  password: yup
    .string()
    .defined('Password has been typed!')
    .min(8, 'Password has to have min 8 symbols')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Required at least one capital letter & one number'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords doesn"t match')
    .defined('Confirm the password!'),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Email has incorrect format!').defined('Email has been typed!'),
  password: yup
    .string()
    .defined('Password has been typed!')
    .min(8, 'Password has to have min 8 symbols')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Required at least one capital letter & one number'),
});
