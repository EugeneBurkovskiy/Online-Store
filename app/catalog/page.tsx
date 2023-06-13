'use client';

import { CatalogFilters } from '@/components/Catalog/CatalogConfiguration/CatalogFilters/CatalogFilters';
import { CatalogSortBar } from '@/components/Catalog/CatalogConfiguration/CatalogSortBar/CatalogSortBar';
import { CatalogProducts } from '@/components/Catalog/CatalogProductsList/CatalogProducts';
import { ScrollUpBtn } from '@/components/UI/ScrollUpBtn/ScrollUpBtn';

const Catalog = () => {
  return (
    <section className="py-3 flex gap-5 items-start">
      <aside className="lg:block hidden">
        <CatalogFilters />
      </aside>
      <div className="flex w-full flex-col gap-10">
        <CatalogSortBar />
        <CatalogProducts />
      </div>
      <ScrollUpBtn />
    </section>
  );
};

export default Catalog;
