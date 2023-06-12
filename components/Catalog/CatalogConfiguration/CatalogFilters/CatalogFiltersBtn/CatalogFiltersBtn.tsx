import { ResetFiltersBtn } from './ResetFiltersBtn/ResetFiltersBtn';
import { CopyFiltersBtn } from './CopyFiltersBtn/CopyFiltersBtn';

const CatalogFiltersBtn = () => {
  return (
    <div className="flex justify-between">
      <CopyFiltersBtn />
      <ResetFiltersBtn />
    </div>
  );
};

export { CatalogFiltersBtn };
