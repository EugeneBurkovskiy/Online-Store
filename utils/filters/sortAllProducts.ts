import { IProduct } from '@/types/types';

export const sortAllProducts = (products: IProduct[], param: string) => {
  switch (param) {
    case 'price-ASC':
      return products.sort((a, b) => b.price - a.price);
    case 'price-DESC':
      return products.sort((a, b) => a.price - b.price);
    case 'rating-ASC':
      return products.sort((a, b) => b.rating - a.rating);
    case 'rating-DESC':
      return products.sort((a, b) => a.rating - b.rating);
    default:
      return products;
  }
};
