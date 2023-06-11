'use client';

import useSWR from 'swr';

import { CatalogFiltersBtn } from './CatalogFiltersBtn/CatalogFiltersBtn';
import { CatalogFiltersList } from './CatalogFiltersList/CatalogFiltersList';
import { getAllCategories } from '@/service/getAllCategories';

const CatalogFilters = () => {
  const { data } = useSWR('categories', getAllCategories);

  return (
    <aside className="flex flex-col gap-5 w-[320px]">
      <CatalogFiltersBtn />
      {data && <CatalogFiltersList title="Category" data={data} queryParamName="category" />}
    </aside>
  );
};

export { CatalogFilters };
