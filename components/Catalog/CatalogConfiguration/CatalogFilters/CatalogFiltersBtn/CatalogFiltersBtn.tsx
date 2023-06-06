import CustomButton from '@/components/CustomButton/CustomButton';

interface IProps {}

const CatalogFiltersBtn: React.FC<IProps> = ({}) => {
  return (
    <div className="flex gap-2">
      <CustomButton title="Reset Filters" />
      <CustomButton title="Copy Filters" />
    </div>
  );
};

export default CatalogFiltersBtn;
