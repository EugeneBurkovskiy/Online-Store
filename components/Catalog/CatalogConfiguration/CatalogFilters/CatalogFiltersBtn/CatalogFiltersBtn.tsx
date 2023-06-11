import { ResetFiltersBtn } from './ResetFiltersBtn/ResetFiltersBtn';
import { CopyFiltersBtn } from './CopyFiltersBtn/CopyFiltersBtn';

interface IProps {}

const CatalogFiltersBtn: React.FC<IProps> = ({}) => {
  return (
    <div className="flex gap-2">
      <ResetFiltersBtn />
      <CopyFiltersBtn />
    </div>
  );
};

export { CatalogFiltersBtn };
