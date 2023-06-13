import { ReactNode } from 'react';

interface IProps {
  title?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const CustomButton = ({ title, className, children, onClick }: IProps) => {
  return (
    <button
      className={`p-3 bg-black text-white font-semibold text-lg whitespace-nowrap md:hover:bg-gold duration-simple ${className}`}
      onClick={onClick}
    >
      {title || children}
    </button>
  );
};

export { CustomButton };
