import React from 'react';

interface IProps {
  title: string;
}

const CustomButton: React.FC<IProps> = ({ title }) => {
  return <button>{title}</button>;
};

export default CustomButton;
