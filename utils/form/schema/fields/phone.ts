import * as yup from 'yup';
export const phoneValidation = yup
  .string()
  .required('Phone is required')
  .matches(/^\+38-\(\d{3}\)-\d{3}-\d{2}-\d{2}$/, 'Wrong phone format');
