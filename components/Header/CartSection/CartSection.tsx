'use client';

import Image from 'next/image';
import cartIcon from '../../../public/icons/cart.svg';
import { useCartProducts } from '@/store/cartProducts';

const CartSection = () => {
  const { cartProducts, cartProductsTotalPrice } = useCartProducts();
  return (
    <button className="flex items-center justify-between gap-2 relative group ">
      <p className="group-hover:text-gold duration-simple hidden sm:block">
        Cart total: {cartProductsTotalPrice}$
      </p>
      <p className="group-hover:text-gold duration-simple sm:hidden">{cartProductsTotalPrice}$</p>
      <p className="absolute right-0 top-5 w-5 h-5 bg-gray rounded-full text-sm text-center text-white group-hover:bg-gold duration-simple">
        {cartProducts.length}
      </p>
      <Image priority src={cartIcon} alt="Cart" width={35} />
    </button>
  );
};

export { CartSection };
