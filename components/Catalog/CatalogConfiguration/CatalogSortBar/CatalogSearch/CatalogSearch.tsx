'use client';

import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';

import { CustomSearch } from '@/components/CustomSearch/CustomSearch';
import { useDebounce } from '@/hooks/useDebounce';
import { useQueryURLManager } from '@/hooks/useQueryURLManager';
import { getAllProductsBySearch } from '@/service/getProductsBySearch';
import { IAllProductsData } from '@/types/types';

const CatalogSearch = () => {
  const { mutate } = useSWR('products');
  const { setQueryObj, searchParamsObj } = useQueryURLManager();
  const { search } = searchParamsObj;
  const [searchValue, setSearchValue] = useState(search || '');
  const { debouncedValue } = useDebounce(searchValue);

  const handleSearch = useCallback(
    async (search: string) => {
      const products: IAllProductsData = await getAllProductsBySearch(search);
      mutate(products);
    },
    [mutate],
  );

  useEffect(() => {
    if (debouncedValue) {
      const queryObj = {
        name: 'search',
        value: debouncedValue,
      };
      setQueryObj(queryObj);
      handleSearch(debouncedValue);
    }
  }, [debouncedValue, handleSearch, setQueryObj]);

  return <CustomSearch value={searchValue} onChange={setSearchValue} />;
};

export { CatalogSearch };
