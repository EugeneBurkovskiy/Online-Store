import { useFormContext } from 'react-hook-form';

import { IRegister } from '@/types/types';

interface IProps {
  name: keyof IRegister;
  type?: string;
  placeholder?: string;
}

const CustomInput = ({ name, type = 'text', placeholder }: IProps) => {
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
      <input
        type={type}
        className={`border ${
          errorMessage ? 'border-red' : 'border-black focus:border-gold'
        } border-solid p-3 w-full duration-simple `}
        placeholder={placeholder}
        {...register(name)}
      />
    </label>
  );
};

export { CustomInput };
