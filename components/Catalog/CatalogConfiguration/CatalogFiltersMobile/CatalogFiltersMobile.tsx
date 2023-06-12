'use client';

import { useEffect, useState } from 'react';

import { CatalogFilters } from '../CatalogFilters/CatalogFilters';
import filterIcon from '../../../../public/icons/filter.svg';
import filterCloseIcon from '../../../../public/icons/filter-close.svg';
import Image from 'next/image';

const CatalogFiltersMobile = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <div className="lg:hidden">
      <button>
        <Image src={filterIcon} alt="filter" width={40} onClick={handleClick} />
      </button>
      <aside
        className={`fixed h-full bg-white top-0 p-4 z-50 flex flex-col gap-2 duration-500 ${
          show ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <button className="flex justify-end">
          <Image src={filterCloseIcon} alt="close-filter" width={40} onClick={handleClick} />
        </button>
        <CatalogFilters />
      </aside>
    </div>
  );
};

export { CatalogFiltersMobile };
