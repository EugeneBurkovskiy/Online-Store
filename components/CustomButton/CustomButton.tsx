interface IProps {
  title: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ title, className, onClick }: IProps) => {
  return (
    <button
      className={`p-3 bg-black text-white font-semibold text-lg whitespace-nowrap hover:bg-gold duration-simple ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export { CustomButton };
