import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Container } from '@/components/UI/Container/Container';

export const metadata = {
  title: 'Cart',
  description: 'Product',
};

const CartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Breadcrumbs />
      <Container>{children}</Container>
    </>
  );
};

export default CartLayout;
