import { memo } from 'react';

import { IProduct } from '@/types/types';
import { formatRating } from '@/utils/formatRating';
import { formatTitle } from '@/utils/formatTitle';
import Image from 'next/image';

interface IProps {
  product: IProduct;
}

const CatalogProductItem = memo(({ product }: IProps) => {
  return (
    <div className="md:w-auto w-[300px]">
      <div className="h-[300px] border border-black border-solid">
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
});

CatalogProductItem.displayName = 'CatalogProductItem';

export { CatalogProductItem };
