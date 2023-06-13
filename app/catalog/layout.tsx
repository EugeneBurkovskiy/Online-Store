import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Container } from '@/components/UI/Container/Container';

export const metadata = {
  title: 'Catalog',
  description: 'Catalog with available products',
};

const CatalogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Breadcrumbs />
      <Container>{children}</Container>
    </>
  );
};

export default CatalogLayout;
