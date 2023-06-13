'use client';

import useSWR from 'swr';

import { LoadingComponent } from '@/components/UI/LoadingComponent/LoadingComponent';
import { IAllProductsData } from '@/types/types';
import { getAllProducts } from '@/service/getAllProducts';
import { CatalogProductsList } from './CatalogProductsList/CatalogProductsList';
import { CustomButton } from '@/components/UI/CustomButton/CustomButton';
import { useProductsCount } from '@/store/productsCountStore';

const CatalogProducts = () => {
  const { foundCount, totalCount } = useProductsCount();
  const { data, isValidating, mutate } = useSWR<IAllProductsData>('products', () =>
    getAllProducts(),
  );

  const loadMoreProducts = async () => {
    const productsCount = foundCount + 30;
    const products: IAllProductsData = await getAllProducts(productsCount);
    mutate(products);
  };

  return (
    (isValidating && <LoadingComponent />) ||
    (data && (
      <div className="flex flex-col justify-center items-center gap-5">
        <CatalogProductsList data={data} />
        {foundCount < totalCount && <CustomButton title="Load More" onClick={loadMoreProducts} />}
      </div>
    ))
  );
};

export { CatalogProducts };
