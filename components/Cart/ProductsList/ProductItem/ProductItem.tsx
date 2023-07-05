import { useEffect, useMemo } from 'react';

import Image from 'next/image';
import { CustomButton } from '@/components/UI/CustomButton/CustomButton';
import { ECartOperations, useCartProducts } from '@/store/cartProducts';
import { IProduct } from '@/types/types';

interface IProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProps) => {
  const { cartProducts, handleCartProductCount, removeCartProduct } = useCartProducts();
  const { id, title, stock, thumbnail, price } = product;

  const currentCartProduct = useMemo(() => {
    return cartProducts.find((item) => item.id === product.id);
  }, [cartProducts, product]);

  const currentCartProductCount = currentCartProduct?.count;

  const addCount = (id: number) => {
    if (currentCartProductCount && currentCartProductCount < stock) {
      handleCartProductCount(id, ECartOperations.add);
    }
  };

  const substractCount = (id: number) => {
    handleCartProductCount(id, ECartOperations.subtract);
  };

  useEffect(() => {
    if (!currentCartProductCount) {
      removeCartProduct(id);
    }
  }, [currentCartProductCount, id, removeCartProduct]);

  const totalPrice = currentCartProductCount ? price * currentCartProductCount : price;
  const leftStock = currentCartProductCount ? stock - currentCartProductCount : stock;

  return (
    <li
      key={id}
      className="flex justify-between items-center md:flex-row md:gap-0 gap-3 flex-col p-5 border border-black border-solid"
    >
      <div className="h-[200px] w-[200px]">
        <Image
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
          className="object-cover h-full"
        />
      </div>
      <div className="md:text-left text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-lg">Stock: {leftStock}</p>
      </div>
      <div className="grid grid-cols-3 gap-x-4 justify-items-center items-center">
        <CustomButton title="-" className="w-[30px] h-[40px]" onClick={() => substractCount(id)} />
        <p>{currentCartProductCount}</p>
        <CustomButton title="+" className="w-[30px] h-[40px]" onClick={() => addCount(id)} />
        <p className="col-start-2 text-lg">{totalPrice}$</p>
      </div>
    </li>
  );
};

export { ProductItem };
