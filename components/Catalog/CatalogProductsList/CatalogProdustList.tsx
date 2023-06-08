'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import CatalogProductItem from './CatalogProductItem/CatalogProductItem';
import { IAllProducts } from '@/types/types';
import { getAllProducts } from '@/service/getAllProducts';
import { useProductsCount } from '@/store/productsCountStore';

const CatalogProductsList = () => {
  const { data } = useSWR<IAllProducts>('products', getAllProducts);
  const { setFoundCount, setTotalCount } = useProductsCount();

  const products = data?.products;

  useEffect(() => {
    if (products) {
      setFoundCount(products.length);
      setTotalCount(data.total);
    }
  }, [data, products, setFoundCount, setTotalCount]);

  return (
    (products && (
      <ul className="grid grid-cols-4 gap-6">
        {products.map((item) => (
          <li key={item.id}>
            <CatalogProductItem product={item} />
          </li>
        ))}
      </ul>
    )) || <LoadingComponent />
  );
};

export default CatalogProductsList;
