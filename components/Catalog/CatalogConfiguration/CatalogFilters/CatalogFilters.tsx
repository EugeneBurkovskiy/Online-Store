'use client';

import useSWR from 'swr';

import { CatalogFiltersBtn } from './CatalogFiltersBtn/CatalogFiltersBtn';
import { CatalogFiltersList } from './CatalogFiltersList/CatalogFiltersList';
import { getAllCategories } from '@/service/getAllCategories';

const CatalogFilters = () => {
  const { data } = useSWR('categories', getAllCategories);

  return (
    <div className="flex flex-col gap-5 w-[280px] bg-white">
      <CatalogFiltersBtn />
      {data && <CatalogFiltersList title="Category" data={data} queryParamName="category" />}
    </div>
  );
};

export { CatalogFilters };
