import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Container from '../Container/Container';
import CartSection from './CartSection/CartSection';

const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <div className="flex justify-between items-center py-3">
          <h1 className="text-4xl fw font-black">Online Store</h1>
          <CartSection />
        </div>
      </Container>
      <Breadcrumbs />
    </header>
  );
};

export default Header;
