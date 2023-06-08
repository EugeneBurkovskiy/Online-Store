import { create } from 'zustand';

interface IProductsCount {
  totalCount: number;
  foundCount: number;
  setFoundCount: (count: number) => void;
  setTotalCount: (count: number) => void;
}

const useProductsCount = create<IProductsCount>((set) => ({
  totalCount: 0,
  foundCount: 0,
  setTotalCount: (count) => set({ totalCount: count }),
  setFoundCount: (count) => set({ foundCount: count }),
}));

export { useProductsCount };
