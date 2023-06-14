'use client';

import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';

import { CustomSearch } from '@/components/UI/CustomSearch/CustomSearch';
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

  const prevSearchValue = useRef('');

  const handleSearch = useCallback(
    async (search: string) => {
      const products: IAllProductsData = await getAllProductsBySearch(search);
      mutate(products);
    },
    [mutate],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    return () => {
      prevSearchValue.current = searchValue;
    };
  }, [searchValue]);

  useEffect(() => {
    if (!prevSearchValue.current && !debouncedValue) {
      return;
    }
    const queryObj = {
      name: 'search',
      value: debouncedValue,
    };
    setQueryObj(queryObj);
    handleSearch(debouncedValue);
  }, [debouncedValue, handleSearch, setQueryObj]);

  return <CustomSearch value={searchValue} onChange={handleChange} />;
};

export { CatalogSearch };
