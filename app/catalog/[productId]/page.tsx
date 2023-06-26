import { ProductDetails } from '@/components/ProductDetails/ProductDetails';
import { getSingleProduct } from '@/service/getSingleProduct';
import { IProduct } from '@/types/types';

interface IProps {
  params: {
    productId: string;
  };
}

export async function generateMetadata({ params: { productId } }: IProps) {
  const product: IProduct = await getSingleProduct(productId);
  return {
    title: product.title,
    description: product.description,
  };
}

const ProductDetailsPage = ({ params: { productId } }: IProps) => {
  return <ProductDetails productId={productId} />;
};

export default ProductDetailsPage;
