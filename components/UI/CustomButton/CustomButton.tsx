import { ReactNode } from 'react';

interface IProps {
  title?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const CustomButton = ({ title, className, children, type, disabled = false, onClick }: IProps) => {
  return (
    <button
      className={`p-3 flex justify-center items-center text-white font-semibold text-lg whitespace-nowrap duration-simple ${
        disabled ? 'bg-gray' : 'bg-black md:hover:bg-gold'
      } ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title || children}
    </button>
  );
};

export { CustomButton };
