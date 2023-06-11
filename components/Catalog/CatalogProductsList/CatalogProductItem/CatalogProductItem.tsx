import { IProduct } from '@/types/types';
import { formatRating } from '@/utils/formatRating';
import { formatTitle } from '@/utils/formatTitle';
import Image from 'next/image';

interface IProps {
  product: IProduct;
}

const CatalogProductItem = ({ product }: IProps) => {
  return (
    <div>
      <div className="h-[200px]">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="object-cover h-full"
        />
      </div>
      <h4 className="text-xl text-center text-black">{formatTitle(product.title)}</h4>
      <p className="text-xl text-center text-black">{formatRating(product.rating)}</p>
      <p className="text-2xl text-gray text-center">{product.price}$</p>
    </div>
  );
};

export { CatalogProductItem };
