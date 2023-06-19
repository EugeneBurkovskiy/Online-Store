import * as yup from 'yup';
export const dateValidation = yup
  .string()
  .required('Date is required')
  .matches(/^\d{2}\/\d{2}$/, 'Invalid date')
  .test('Invalid date', (value) => {
    const [month, year] = value.split('/').map((item) => +item);
    const currentYear = new Date().getDate();
    if (month > 12 || year < currentYear) {
      return;
    }
    return true;
  });
