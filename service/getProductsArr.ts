import { IProduct } from '@/types/types';
import { getSingleProduct } from './getSingleProduct';

export const getProductsArr = async (productsId: number[]) => {
  const responses: IProduct[] = await Promise.all(
    productsId.map((id) => getSingleProduct(`${id}`)),
  );

  return responses;
};
