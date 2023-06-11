import { Container } from '@/components/Container/Container';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import Link from 'next/link';

const Home = () => {
  return (
    <Container>
      <CustomButton className="p-0 h-[50px] w-[200px]">
        <Link href={'catalog'} className="w-full h-full flex items-center justify-center">
          Start Shopping
        </Link>
      </CustomButton>
    </Container>
  );
};

export default Home;
