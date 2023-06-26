import { CustomButton } from '@/components/UI/CustomButton/CustomButton';
import { useCartProducts } from '@/store/cartProducts';
import { IProduct } from '@/types/types';
import { formatRating } from '@/utils/formatRating';

interface IProps {
  productData: IProduct;
  handleModal: () => void;
}

const ProductDescription = ({ productData, handleModal }: IProps) => {
  const { title, description, price, rating, stock, brand, category, id } = productData;
  const { incrCartProductsTotalPrice, addCartProducts } = useCartProducts();

  const handleCart = (id: number, price: number) => {
    incrCartProductsTotalPrice(price);
    addCartProducts(id);
  };
  return (
    <section className="flex flex-col gap-2 text-xl">
      <h2 className="font-bold text-4xl text-center md:text-left ">{title}</h2>
      <p className="text-center md:text-left">{formatRating(rating)}</p>
      <p className="text-center md:text-left text-3xl">{price}$</p>
      <p>{description}</p>
      <div className="flex flex-col gap-2 md:w-[170px]">
        <CustomButton title="Add to cart" onClick={() => handleCart(id, price)} />
        <CustomButton title="Buy now" onClick={handleModal} />
      </div>
      <p>Stock: {stock} left</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
    </section>
  );
};

export { ProductDescription };
