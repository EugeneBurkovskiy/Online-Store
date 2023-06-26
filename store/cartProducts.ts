import { create } from 'zustand';

interface ICartProducts {
  cartProducts: number[];
  cartProductsTotalPrice: number;
  addCartProducts: (count: number) => void;
  incrCartProductsTotalPrice: (count: number) => void;
}

const useCartProducts = create<ICartProducts>((set) => ({
  cartProducts: [],
  cartProductsTotalPrice: 0,
  addCartProducts: (count) =>
    set((state) => ({
      cartProducts: [...state.cartProducts, count],
    })),
  incrCartProductsTotalPrice: (count) =>
    set((state) => ({
      cartProductsTotalPrice: (state.cartProductsTotalPrice += count),
    })),
}));

export { useCartProducts };
