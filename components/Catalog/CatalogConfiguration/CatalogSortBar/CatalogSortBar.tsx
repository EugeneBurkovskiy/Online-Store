import CustomSearch from '@/components/CustomSearch/CustomSearch';
import CatalogSort from './CatalogSort/CatalogSort';
import CatalogFound from './CatalogFound/CatalogFound';
import CatalogGrid from './CatalogGrid/CatalogGrid';

const CatalogSortBar = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex text-center gap-1 divide-x divide-solid">
        <CatalogFound />
        <CatalogSort />
      </div>
      <CustomSearch />
      <CatalogGrid />
    </div>
  );
};

export default CatalogSortBar;
