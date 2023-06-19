import * as yup from 'yup';
export const surnameValidation = yup
  .string()
  .required('Surname is required')
  .matches(/^[A-Za-z]+$/, 'Surname must contain only letters');
