'use client';

import { ChangeEvent } from 'react';

import { useQueryURLManager } from '@/hooks/useQueryURLManager';

const CatalogSort = () => {
  const { setQueryObj, searchParamsObj } = useQueryURLManager();
  const { sort } = searchParamsObj;

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const queryObj = {
      name: 'sort',
      value: e.currentTarget.value,
    };
    setQueryObj(queryObj);
  };

  const selectedValue = sort || '';

  return (
    <select className="text-lg cursor-pointer" onChange={handleSelect} defaultValue={selectedValue}>
      <option value="">Sort by default</option>
      <option value="price-ASC">Sort by price: low to high</option>
      <option value="price-DESC">Sort by price: high to low</option>
      <option value="rating-ASC">Sort by rating: low to high</option>
      <option value="rating-DESC">Sort by rating: high to low</option>
    </select>
  );
};

export { CatalogSort };
