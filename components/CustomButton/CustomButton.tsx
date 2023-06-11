interface IProps {
  title: string;
  onClick?: () => void;
}

const CustomButton = ({ title, onClick }: IProps) => {
  return (
    <button
      className="p-3 bg-black text-white font-semibold text-lg whitespace-nowrap hover:bg-gold duration-simple"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export { CustomButton };
