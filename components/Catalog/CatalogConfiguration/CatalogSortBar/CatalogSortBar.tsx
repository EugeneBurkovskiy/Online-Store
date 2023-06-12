import { CatalogSort } from './CatalogSort/CatalogSort';
import { CatalogFound } from './CatalogFound/CatalogFound';
import { CatalogGrid } from './CatalogGrid/CatalogGrid';
import { CatalogSearch } from './CatalogSearch/CatalogSearch';
import { CatalogFiltersMobile } from '../CatalogFiltersMobile/CatalogFiltersMobile';

const CatalogSortBar = () => {
  return (
    <div className="flex justify-between items-center w-full flex-col md:flex-row gap-2 md:gap-0">
      <CatalogFiltersMobile />
      <div className="flex gap-1 md:divide-x divide-solid md:text-cente flex-col md:flex-row">
        <CatalogFound />
        <CatalogSort />
      </div>
      <CatalogSearch />
      <CatalogGrid />
    </div>
  );
};

export { CatalogSortBar };
