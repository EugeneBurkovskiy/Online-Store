'use client';

import useSWR from 'swr';

import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import CatalogProductItem from './CatalogProductItem/CatalogProductItem';
import { IAllProducts } from '@/types/types';
import { getAllProducts } from '@/service/getAllProducts';

const CatalogProductsList = () => {
  const { data, isLoading, error } = useSWR<IAllProducts>('products', getAllProducts);
  const products = data?.products;
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
