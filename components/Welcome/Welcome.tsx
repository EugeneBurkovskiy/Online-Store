import { Container } from '../UI/Container/Container';
import { Benefits } from './Benefits/Benefits';
import { StartButton } from './StartButton/StartButton';

const Welcome = () => {
  return (
    <section className="h-full py-5 flex flex-col gap-4">
      <Container>
        <h2 className="text-center text-2xl sm:text-3xl md:ext-4xl font-bold">
          Unlock Limitless Possibilities: Shop Smarter, Explore Online, and Ignite Your Retail
          Adventure!
        </h2>
      </Container>
      <StartButton />
      <Benefits />
    </section>
  );
};

export { Welcome };
