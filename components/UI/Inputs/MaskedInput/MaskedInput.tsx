import { useFormContext } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { IRegister } from '@/types/types';

interface IProps {
  name: keyof IRegister;
  type?: string;
  placeholder?: string;
  mask: string;
}

const MaskedInput = ({ name, type = 'text', placeholder, mask }: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IRegister>();

  const errorMessage = errors[name]?.message;

  return (
    <label className="relative w-full">
      {errorMessage && (
        <p className="absolute top-0 right-[3px] text-xs text-red">{errorMessage}</p>
      )}
      <InputMask
        mask={mask}
        className={`border ${
          errorMessage ? 'border-red' : 'border-black focus:border-gold'
        } border-solid p-3 w-full duration-simple `}
        type={type}
        placeholder={placeholder}
        maskChar={''}
        {...register(name)}
      ></InputMask>
    </label>
  );
};

export { MaskedInput };
