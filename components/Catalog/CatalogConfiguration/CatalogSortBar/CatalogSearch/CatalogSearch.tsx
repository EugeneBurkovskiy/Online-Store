'use client';

import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';

import { CustomSearch } from '@/components/CustomSearch/CustomSearch';
import { useDebounce } from '@/hooks/useDebounce';
import { useQueryURLManager } from '@/hooks/useQueryURLManager';
import { getAllProductsBySearch } from '@/service/getProductsBySearch';

const CatalogSearch = () => {
  const { mutate } = useSWR('products');
  const { setQueryObj, searchParamsObj } = useQueryURLManager();
  const [searchValue, setSearchValue] = useState(searchParamsObj.search || '');
  const { debouncedValue } = useDebounce(searchValue);

  const handleSearch = useCallback(
    async (search: string) => {
      const products = await getAllProductsBySearch(search);
      mutate(products);
    },
    [mutate],
  );

  useEffect(() => {
    const queryObj = {
      name: 'search',
      value: debouncedValue,
    };
    setQueryObj(queryObj);
    handleSearch(debouncedValue);
  }, [debouncedValue, handleSearch, setQueryObj]);

  return <CustomSearch value={searchValue} onChange={setSearchValue} />;
};

export { CatalogSearch };
