'use client';

import { useCallback } from 'react';
import useSWR from 'swr';

import { CatalogFiltersBtn } from './CatalogFiltersBtn/CatalogFiltersBtn';
import { CatalogFiltersList } from './CatalogFiltersList/CatalogFiltersList';
import { getAllCategories } from '@/service/getAllCategories';
import { useQueryURLManager } from '@/hooks/useQueryURLManager';

const CatalogFilters = () => {
  const { data } = useSWR('categories', getAllCategories);

  const { setQueryObj } = useQueryURLManager();

  const handleCheckbox = useCallback(
    (queryParamName: string, queryParamValue: string) => {
      setQueryObj({ name: queryParamName, value: queryParamValue });
    },
    [setQueryObj],
  );

  return (
    <aside className="flex flex-col gap-5 w-[320px]">
      <CatalogFiltersBtn />
      {data && (
        <CatalogFiltersList
          title="Category"
          data={data}
          queryParamName="category"
          handleCheckbox={handleCheckbox}
        />
      )}
    </aside>
  );
};

export { CatalogFilters };
