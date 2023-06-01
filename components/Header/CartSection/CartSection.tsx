import Image from 'next/image';
import cartIcon from '../../../public/icons/cart.svg';

const CartSection = () => {
  return (
    <div className="flex items-center justify-between gap-2 cursor-pointer hover:text-gold relative">
      <p>Cart total: 172$</p>
      <p className="absolute right-0 top-5 w-5 h-5 bg-gray br rounded-full text-sm text-center text-white">
        5
      </p>
      <Image priority src={cartIcon} alt="Cart" width={35} />
    </div>
  );
};

export default CartSection;
