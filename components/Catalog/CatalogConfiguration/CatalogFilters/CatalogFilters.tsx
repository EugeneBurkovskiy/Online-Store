'use client';

import useSWR from 'swr';
import { CatalogFiltersBtn } from './CatalogFiltersBtn/CatalogFiltersBtn';
import { CatalogFiltersList } from './CatalogFiltersList/CatalogFiltersList';
import { getAllCategories } from '@/service/getAllCategories';

interface IProps {}

const CatalogFilters: React.FC<IProps> = () => {
  const { data } = useSWR('categories', getAllCategories);
  return (
    <aside className="flex flex-col gap-5">
      <CatalogFiltersBtn />
      {data && <CatalogFiltersList title="Category" data={data} />}
    </aside>
  );
};

export { CatalogFilters };
