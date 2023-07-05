import { ICartProduct } from '@/types/types';
import { create } from 'zustand';

export enum ECartOperations {
  add = 'add',
  subtract = 'substact',
}
interface ICartProducts {
  cartProducts: ICartProduct[];
  addCartProduct: (product: ICartProduct) => void;
  handleCartProductCount: (id: number, operation: ECartOperations) => void;
  removeCartProduct: (id: number) => void;
}

const useCartProducts = create<ICartProducts>((set) => ({
  cartProducts: [],
  addCartProduct: (product) =>
    set((state) => ({
      cartProducts: [...state.cartProducts, product],
    })),
  handleCartProductCount: (id, operation) =>
    set((state) => {
      const currentCartProduct = state.cartProducts.find((item) => item.id === id);
      if (currentCartProduct) {
        if (operation === ECartOperations.add) currentCartProduct.count += 1;
        else if (operation === ECartOperations.subtract) currentCartProduct.count -= 1;
      }
      return {
        cartProducts: [...state.cartProducts],
      };
    }),
  removeCartProduct: (id) =>
    set((state) => {
      const filteredCardProducts = state.cartProducts.filter((item) => item.id !== id);
      return { cartProducts: [...filteredCardProducts] };
    }),
}));

export { useCartProducts };
