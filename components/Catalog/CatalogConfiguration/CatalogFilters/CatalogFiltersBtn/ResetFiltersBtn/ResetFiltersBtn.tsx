import { CustomButton } from '@/components/CustomButton/CustomButton';

const ResetFiltersBtn = () => {
  const handleReset = () => {
    window.location.replace('/catalog?grid=4');
  };

  return <CustomButton title="Reset Filters" className="w-[130px]" onClick={handleReset} />;
};

export { ResetFiltersBtn };
