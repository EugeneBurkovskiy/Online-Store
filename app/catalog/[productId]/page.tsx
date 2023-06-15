'use client';

import useSWR from 'swr';
import { useEffect } from 'react';

import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { getSingleProduct } from '@/service/getSingleProduct';
import { LoadingComponent } from '@/components/UI/LoadingComponent/LoadingComponent';
import { ErrorText } from '@/components/UI/ErrorText/ErrorText';

import { IProduct } from '@/types/types';

interface IProps {
  params: {
    productId: string;
  };
}

const ProductDetailsPage = ({ params: { productId } }: IProps) => {
  const { data, error, isValidating } = useSWR<IProduct | null>('product', () =>
    getSingleProduct(productId),
  );

  return (
    (isValidating && <LoadingComponent />) ||
    (data && <ProductDetails productData={data} />) ||
    (error && <ErrorText />)
  );
};

export default ProductDetailsPage;
