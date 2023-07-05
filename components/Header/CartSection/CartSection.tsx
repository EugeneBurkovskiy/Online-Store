'use client';

import Image from 'next/image';
import cartIcon from '../../../public/icons/cart.svg';
import { useCartProducts } from '@/store/cartProducts';
import Link from 'next/link';
import { useMemo } from 'react';
import { calculateTotalPrice } from '@/utils/calculateTotalPrice';

const CartSection = () => {
  const { cartProducts } = useCartProducts();
  const totalPrice = useMemo(() => calculateTotalPrice(cartProducts), [cartProducts]);

  return (
    <Link href={'cart'} className="flex items-center justify-between gap-2 relative group ">
      <p className="group-hover:text-gold duration-simple">
        <span className="sm:inline hidden">Cart total:</span> {totalPrice}$
      </p>
      <p className="absolute right-0 top-5 w-5 h-5 bg-gray rounded-full text-sm text-center text-white group-hover:bg-gold duration-simple">
        {cartProducts.length}
      </p>
      <Image priority src={cartIcon} alt="Cart" width={35} />
    </Link>
  );
};

export { CartSection };
