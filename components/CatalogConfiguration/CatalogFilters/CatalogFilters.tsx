import CatalogFiltersBtn from './CatalogFiltersBtn/CatalogFiltersBtn';
import CatalogFiltersList from './CatalogFiltersList/CatalogFiltersList';

interface IProps {}

const CatalogFilters: React.FC<IProps> = ({}) => {
  return (
    <aside className="flex flex-col gap-5">
      <CatalogFiltersBtn />
      <CatalogFiltersList title="Category" />
      <CatalogFiltersList title="Brand" />
    </aside>
  );
};

export default CatalogFilters;
