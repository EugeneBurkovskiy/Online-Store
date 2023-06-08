'use client';

import useSWR from 'swr';

import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import { IAllProductsData } from '@/types/types';
import { getAllProducts } from '@/service/getAllProducts';
import { CatalogProductsList } from './CatalogProductsList/CatalogProductsList';

const CatalogProducts = () => {
  const { data } = useSWR<IAllProductsData>('products', getAllProducts);

  return (data && <CatalogProductsList data={data} />) || <LoadingComponent />;
};

export { CatalogProducts };
