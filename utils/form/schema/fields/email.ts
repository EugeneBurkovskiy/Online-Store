import * as yup from 'yup';
export const emailValidation = yup
  .string()
  .required('Email is required')
  .matches(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    'Invalid email',
  );
