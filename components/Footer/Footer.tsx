import Image from 'next/image';
import githubIcon from '../../public/icons/github-logo.svg';
import RSIcon from '../../public/icons//rs_school_js.svg';
import { Container } from '../Container/Container';

const Footer = () => {
  return (
    <footer className="absolue bottom-0 w-full py-5 border-solid border-t border-gray ">
      <Container>
        <div className="flex justify-between items-center">
          <a
            href="https://github.com/EugeneBurkovskiy"
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image priority src={githubIcon} alt="Cart" width={40} />
            <p className="text-xl">My GitHub</p>
          </a>
          <p className="text-xl">© 2023 Online Store</p>
          <Image priority src={RSIcon} alt="RSSchool" width={100} />
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
