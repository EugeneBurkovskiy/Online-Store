'use client';

import { useEffect, useState } from 'react';
import scrollUpIcon from '../../../public/icons/scrollUp.svg';
import Image from 'next/image';

const ScrollUpBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.pageYOffset > 800);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`w-[60px] h-[60px] fixed bottom-10 right-5 rounded-full border border-black border-solid flex justify-center items-center ${
        show ? '' : 'hidden'
      }`}
    >
      <Image src={scrollUpIcon} alt="scrollUp" width={40} height={40} className="hover:fill-gold" />
    </button>
  );
};

export { ScrollUpBtn };
