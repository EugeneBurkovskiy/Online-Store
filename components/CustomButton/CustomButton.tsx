import React from 'react';

interface IProps {
  title: string;
}

const CustomButton: React.FC<IProps> = ({ title }) => {
  return (
    <button className="p-3 bg-black text-white font-semibold text-lg whitespace-nowrap hover:bg-gold duration-simple">
      {title}
    </button>
  );
};

export default CustomButton;
