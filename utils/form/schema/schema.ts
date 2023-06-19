import * as yup from 'yup';
import { nameValidation } from './fields/name';
import { surnameValidation } from './fields/surname';
import { phoneValidation } from './fields/phone';
import { adressValidation } from './fields/adress';
import { emailValidation } from './fields/email';
import { cardValidation } from './fields/card';
import { dateValidation } from './fields/date';
import { cvvValidation } from './fields/cvv';

export const schema = yup.object().shape({
  name: nameValidation,
  surname: surnameValidation,
  phone: phoneValidation,
  adress: adressValidation,
  email: emailValidation,
  card: cardValidation,
  date: dateValidation,
  cvv: cvvValidation,
});
