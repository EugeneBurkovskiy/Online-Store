import { ChangeEvent } from 'react';

interface IProps {
  title: string;
  checked: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox = ({ title, checked, handleChange }: IProps) => {
  return (
    <label className="flex gap-3 text-xl cursor-pointer">
      <input
        type="checkbox"
        className="cursor-pointer"
        onChange={handleChange}
        value={title}
        checked={checked}
      />
      <span>{title}</span>
    </label>
  );
};

export { CustomCheckbox };
