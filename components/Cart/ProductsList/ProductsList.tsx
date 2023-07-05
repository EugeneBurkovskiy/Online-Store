'use client';
import { useMemo } from 'react';
import useSWR from 'swr';

import { getProductsArr } from '@/service/getProductsArr';
import { useCartProducts } from '@/store/cartProducts';
import { IProduct } from '@/types/types';
import { ProductItem } from './ProductItem/ProductItem';

const ProductsList = () => {
  const { cartProducts } = useCartProducts();
  const { data, error, isValidating } = useSWR<IProduct[]>('cartProducts', () =>
    getProductsArr(cartProducts.map((item) => item.id)),
  );

  const synchronizedData = useMemo(
    () => data?.filter((item) => cartProducts.find((product) => item.id === product.id)),
    [cartProducts, data],
  );

  return synchronizedData ? (
    <ul>
      {synchronizedData.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </ul>
  ) : null;
};

export { ProductsList };
