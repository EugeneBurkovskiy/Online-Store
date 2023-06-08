'use client';

import { useEffect } from 'react';

import { CatalogProductItem } from '../CatalogProductItem/CatalogProductItem';
import { IAllProductsData } from '@/types/types';
import { useProductsCount } from '@/store/productsCountStore';
import { sortAllProducts } from '@/utils/filters/sortAllProducts';

interface IProps {
  data: IAllProductsData;
}

const CatalogProductsList = ({ data }: IProps) => {
  const { setFoundCount, setTotalCount } = useProductsCount();

  const products = data.products;

  useEffect(() => {
    if (products) {
      setFoundCount(products.length);
      setTotalCount(data.total);
    }
  }, [data, products, setFoundCount, setTotalCount]);

  return (
    <ul className="grid grid-cols-4 gap-6">
      {products.map((item) => (
        <li key={item.id}>
          <CatalogProductItem product={item} />
        </li>
      ))}
    </ul>
  );
};

export { CatalogProductsList };
