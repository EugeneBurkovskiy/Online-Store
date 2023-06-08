import CatalogSort from './CatalogSort/CatalogSort';
import CatalogFound from './CatalogFound/CatalogFound';
import CatalogGrid from './CatalogGrid/CatalogGrid';
import { CatalogSearch } from './CatalogSearch/CatalogSearch';

const CatalogSortBar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex text-center gap-1 divide-x divide-solid">
        <CatalogFound />
        <CatalogSort />
      </div>
      <CatalogSearch />
      <CatalogGrid />
    </div>
  );
};

export default CatalogSortBar;
