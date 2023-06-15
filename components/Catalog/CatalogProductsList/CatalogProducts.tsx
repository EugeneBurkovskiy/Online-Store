'use client';

import { useEffect } from 'react';
import useSWR from 'swr';

import { LoadingComponent } from '@/components/UI/LoadingComponent/LoadingComponent';
import { IAllProductsData } from '@/types/types';
import { getAllProducts } from '@/service/getAllProducts';
import { CatalogProductsList } from './CatalogProductsList/CatalogProductsList';
import { CustomButton } from '@/components/UI/CustomButton/CustomButton';
import { useProductsCount } from '@/store/productsCountStore';
import { ErrorText } from '@/components/UI/ErrorText/ErrorText';

const CatalogProducts = () => {
  const { foundCount, totalCount, setFoundCount, setTotalCount } = useProductsCount();
  const { data, error, mutate, isValidating } = useSWR<IAllProductsData>('products', () =>
    getAllProducts(),
  );

  useEffect(() => {
    if (data && data.products) {
      const { products, total } = data;
      setFoundCount(products.length);
      setTotalCount(total);
    }
  }, [data, setFoundCount, setTotalCount]);

  const loadMoreProducts = async () => {
    const productsCount = foundCount + 30;
    const products: IAllProductsData = await getAllProducts(productsCount);
    mutate(products);
  };

  return (
    (isValidating && <LoadingComponent />) ||
    (data?.products.length && (
      <div className="flex flex-col justify-center items-center gap-5">
        <CatalogProductsList data={data} />
        {foundCount < totalCount && <CustomButton title="Load More" onClick={loadMoreProducts} />}
      </div>
    )) ||
    (error && <ErrorText />) ||
    (!data?.products.length && <ErrorText text="Nothing Found" />)
  );
};

export { CatalogProducts };
