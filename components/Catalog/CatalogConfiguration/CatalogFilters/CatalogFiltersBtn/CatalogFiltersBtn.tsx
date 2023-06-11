import { ResetFiltersBtn } from './ResetFiltersBtn/ResetFiltersBtn';
import { CopyFiltersBtn } from './CopyFiltersBtn/CopyFiltersBtn';

const CatalogFiltersBtn = () => {
  return (
    <div className="flex gap-2">
      <CopyFiltersBtn />
      <ResetFiltersBtn />
    </div>
  );
};

export { CatalogFiltersBtn };
