import { ICartProduct } from '@/types/types';

const calculateTotalPrice = (products: ICartProduct[]) => {
  const totalPrice = products.reduce((sum, item) => {
    return (sum += item.count * item.price);
  }, 0);

  return totalPrice;
};

export { calculateTotalPrice };
