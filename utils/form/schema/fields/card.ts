import * as yup from 'yup';
export const cardValidation = yup
  .string()
  .required('Card is required')
  .matches(/^(\d{4}\s){3}\d{4}$/, 'Invalid card number');
