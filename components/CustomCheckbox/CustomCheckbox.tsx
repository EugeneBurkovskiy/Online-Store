interface IProps {
  title: string;
}

const CustomCheckbox: React.FC<IProps> = ({ title }) => {
  return (
    <label className="flex gap-3 text-xl cursor-pointer">
      <input type="checkbox" className="cursor-pointer" />
      <span>{title}</span>
    </label>
  );
};

export default CustomCheckbox;
