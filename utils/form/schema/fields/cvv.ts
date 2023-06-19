import * as yup from 'yup';
export const cvvValidation = yup
  .string()
  .required('CVV is required')
  .matches(/^\d{3}$/, 'Invalid CVV');
