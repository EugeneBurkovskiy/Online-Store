import { Container } from '../Container/Container';
import { CartSection } from './CartSection/CartSection';

const Header = () => {
  return (
    <header className="w-full sticky top-0 bg-white">
      <Container>
        <div className="flex justify-between items-center py-3">
          <h1 className="sm:text-4xl fw font-black text-2xl">Online Store</h1>
          <CartSection />
        </div>
      </Container>
    </header>
  );
};

export { Header };
