import CatalogFilters from '@/components/CatalogConfiguration/CatalogFilters/CatalogFilters';
import CatalogSortBar from '@/components/CatalogConfiguration/CatalogSortBar/CatalogSortBar';
import CatalogProductsList from '@/components/CatalogProducts/CatalogProductsList/CatalogProdustList';

const Catalog = () => {
  return (
    <section className="py-3 flex gap-5 items-start">
      <CatalogFilters />
      <div className="flex w-full flex-col gap-10">
        <CatalogSortBar />
        <CatalogProductsList />
      </div>
    </section>
  );
};

export default Catalog;
