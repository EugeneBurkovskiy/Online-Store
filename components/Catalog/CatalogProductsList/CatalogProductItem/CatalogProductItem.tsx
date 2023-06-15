import { memo } from 'react';

import { IProduct } from '@/types/types';
import { formatRating } from '@/utils/formatRating';
import { formatTitle } from '@/utils/formatTitle';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface IProps {
  product: IProduct;
}

const CatalogProductItem = memo(({ product }: IProps) => {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/catalog/${id}`);
  };

  return (
    <div
      className="md:w-auto w-[270px] cursor-pointer group"
      onClick={() => handleClick(product.id)}
    >
      <div className="h-[300px] border border-black border-solid md:group-hover:border-gold duration-500">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="object-cover h-full"
        />
      </div>
      <h4 className="text-xl text-center text-black md:group-hover:text-gold duration-500">
        {formatTitle(product.title)}
      </h4>
      <p className="text-xl text-center text-black md:group-hover:text-gold duration-500">
        {formatRating(product.rating)}
      </p>
      <p className="text-2xl text-gray text-center md:group-hover:text-gold duration-500">
        {product.price}$
      </p>
    </div>
  );
});

CatalogProductItem.displayName = 'CatalogProductItem';

export { CatalogProductItem };
