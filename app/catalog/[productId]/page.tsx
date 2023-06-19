import { ProductDetails } from '@/components/ProductDetails/ProductDetails';

interface IProps {
  params: {
    productId: string;
  };
}

export function generateMetadata({ params: { productId } }: IProps) {
  return {
    title: `Product - ${productId}`,
    description: `The ${productId} details`,
  };
}

const ProductDetailsPage = ({ params: { productId } }: IProps) => {
  return <ProductDetails productId={productId} />;
};

export default ProductDetailsPage;
