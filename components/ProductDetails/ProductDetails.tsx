import { IProduct } from '@/types/types';
import { ProductDescription } from './ProductDescription/ProductDescription';
import { ProductImages } from './ProductImages/ProductImages';

interface IProps {
  productData: IProduct;
}

const ProductDetails = ({ productData }: IProps) => {
  const { images } = productData;
  return (
    <article className="flex gap-8 py-5 md:flex-row flex-col">
      <ProductImages images={images} />
      <ProductDescription productData={productData} />
    </article>
  );
};

export { ProductDetails };
