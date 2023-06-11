import { IAllProductsData } from '@/types/types';

const compareProductsResponse = (productsDataArr: IAllProductsData[]) => {
  const limitSum = productsDataArr.reduce((sum, item) => (sum += item.limit), 0);
  const skipSum = productsDataArr.reduce((sum, item) => (sum += item.skip), 0);
  const totalSum = productsDataArr.reduce((sum, item) => (sum += item.total), 0);
  const products = productsDataArr.map((item) => item.products).flat();
  const responseObject = {
    limit: limitSum,
    skip: skipSum,
    total: totalSum,
    products: products,
  };

  return responseObject;
};

export { compareProductsResponse };
