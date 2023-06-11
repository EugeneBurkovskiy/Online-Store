import { useEffect, useMemo } from 'react';
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
  const { setFoundCount, setTotalCount } = useProductsCount();
  const { searchParamsObj } = useQueryURLManager();
  const { sort, grid, category } = searchParamsObj;
  const { mutate } = useSWR('products');

  const products = data.products;

  useEffect(() => {
    if (products) {
      setFoundCount(products.length);
      setTotalCount(data.total);
    }
  }, [data, products, setFoundCount, setTotalCount]);

  useEffect(() => {
    const handleCategory = async (category: string) => {
      const categoryArr = category.split(',');
      const response: IAllProductsData[] = await getByCategory(categoryArr);
      const products = compareProductsResponse(response);
      mutate(products);
    };

    if (category) {
      handleCategory(category);
    } else {
      mutate(() => getAllProducts());
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
        (grid === ECatalogGrid.mode1 && 'grid-cols-3') ||
        (grid === ECatalogGrid.mode2 && 'grid-cols-4') ||
        (grid === ECatalogGrid.mode3 && 'grid-cols-5') ||
        'grid-cols-4'
      } gap-6`}
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
