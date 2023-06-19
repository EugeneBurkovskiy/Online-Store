import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { masks } from '@/utils/form/masks/masks';
import { schema } from '@/utils/form/schema/schema';

import { IRegister } from '@/types/types';
import { CustomButton } from '../UI/CustomButton/CustomButton';
import { CustomInput } from '../UI/Inputs/CustomInput/CustomInput';
import { MaskedInput } from '../UI/Inputs/MaskedInput/MaskedInput';

interface IProps {
  handleModal: () => void;
}

const initialValues = {
  name: '',
  surname: '',
  phone: '',
  adress: '',
  email: '',
  card: '',
  date: '',
  cvv: '',
};

const Form = ({ handleModal }: IProps) => {
  const { cardMask, date, cvv, phone } = masks;

  const methods = useForm<IRegister>({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = methods;

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data));
    reset();
    handleModal();
  });

  const errorsStatus = !!Object.keys(errors).length;

  return (
    <FormProvider {...methods}>
      <form
        className="bg-white flex flex-col gap-3 justify-center items-center p-10 max-w-[300px] relative"
        onSubmit={onSubmit}
      >
        <button
          className="absolute top-[5px] right-[10px] text-3xl md:hover:text-gold"
          onClick={handleModal}
        >
          ✕
        </button>
        <CustomInput name="name" placeholder="Name *" />
        <CustomInput name="surname" placeholder="Surname *" />
        <MaskedInput name="phone" placeholder="+38-(XXX)-XXX-XX-XX *" mask={phone} />
        <CustomInput name="adress" placeholder="Adress *" />
        <CustomInput name="email" type="email" placeholder="Email *" />
        <MaskedInput name="card" placeholder="Card number *" mask={cardMask} />
        <div className="flex gap-3">
          <MaskedInput name="date" placeholder="MM / YY *" mask={date} />
          <MaskedInput name="cvv" placeholder="CVV *" mask={cvv} />
        </div>
        <CustomButton
          title="Submit"
          className="w-full"
          type="submit"
          disabled={(errorsStatus || !isDirty) && true}
        />
      </form>
    </FormProvider>
  );
};

export { Form };
