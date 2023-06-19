import * as yup from 'yup';
export const nameValidation = yup
  .string()
  .required('Name is required')
  .matches(/^[A-Za-z]+$/, 'Name must contain only letters');
