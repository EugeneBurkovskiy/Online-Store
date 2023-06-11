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
            className="flex gap-2 items-center cursor-pointer sm:w-auto w-[50px]"
          >
            <Image priority src={githubIcon} alt="Cart" width={40} />
            <p className="text-m sm:text-xl">My GitHub</p>
          </a>
          <p className="text-m sm:text-xl">2023</p>
          <a href="https://rs.school/" className="sm:w-auto w-[70px]">
            <Image priority src={RSIcon} alt="RSSchool" width={100} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
