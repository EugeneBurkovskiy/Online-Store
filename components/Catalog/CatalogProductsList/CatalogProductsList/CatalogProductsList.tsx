import { useEffect, useMemo, useRef } from 'react';
import useSWR from 'swr';

import { CatalogProductItem } from '../CatalogProductItem/CatalogProductItem';
import { IAllProductsData } from '@/types/types';
import { useProductsCount } from '@/store/productsCountStore';
import { Filter } from '@/utils/filters/Filter';
import { useQueryURLManager } from '@/hooks/useQueryURLManager';
import { getByCategory } from '@/service/getByCategory';
import { compareProductsResponse } from '@/utils/compareProductsResponse';
import { getAllProducts } from '@/service/getAllProducts';
import { ECatalogGrid } from '../../CatalogConfiguration/CatalogSortBar/CatalogGrid/CatalogGrid';
interface IProps {
  data: IAllProductsData;
}

const CatalogProductsList = ({ data }: IProps) => {
  const { searchParamsObj } = useQueryURLManager();
  const { sort, grid, category } = searchParamsObj;
  const { mutate } = useSWR('products');

  const prevCategoryValue = useRef<string[]>([]);
  const { products } = data;

  useEffect(() => {
    return () => {
      if (category) {
        prevCategoryValue.current = [...category.split(',')];
      }
    };
  }, [category]);

  useEffect(() => {
    const handleCategory = async (category: string) => {
      const categoryArr = category.split(',');
      const response: IAllProductsData[] = await getByCategory(categoryArr);
      const products = compareProductsResponse(response);
      mutate(products);
    };

    if (!category && !prevCategoryValue.current.length) {
      return;
    }

    if (!category && prevCategoryValue.current.length) {
      mutate(() => getAllProducts());
    } else if (category) {
      handleCategory(category);
    }
  }, [category, mutate]);

  const filteredProducts = useMemo(() => {
    const filterCase = new Filter(products);
    const newProductsList = filterCase.sortAllProducts(sort || '').filteredProducts;
    return newProductsList;
  }, [products, sort]);

  return (
    <ul
      className={`grid ${
        (grid === ECatalogGrid.mode1 && 'md:grid-cols-3') ||
        (grid === ECatalogGrid.mode2 && 'md:grid-cols-4') ||
        (grid === ECatalogGrid.mode3 && 'lg:grid-cols-5') ||
        'md:grid-cols-3'
      } gap-6 grid-cols-1 justify-items-center`}
    >
      {filteredProducts.map((item) => (
        <li key={item.id}>
          <CatalogProductItem product={item} />
        </li>
      ))}
    </ul>
  );
};

export { CatalogProductsList };
