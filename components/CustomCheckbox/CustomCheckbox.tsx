interface IProps {}

const CustomCheckbox: React.FC<IProps> = ({}) => {
  return (
    <label className="flex gap-3 text-xl cursor-pointer">
      <input type="checkbox" className="cursor-pointer" />
      <span>Category</span>
    </label>
  );
};

export default CustomCheckbox;
