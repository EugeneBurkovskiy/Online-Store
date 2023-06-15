'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

import { Container } from '../UI/Container/Container';
import { createBreadcrumbsLinks } from '@/utils/createBreadcrumbsLinks';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const breadcrumbsPathArr = createBreadcrumbsLinks(pathname);
  return (
    <nav className="w-full bg-lightGray py-10">
      <Container>
        <ul className="text-4xl fw font-medium flex gap-3">
          {breadcrumbsPathArr.map((item) => (
            <Fragment key={item[1]}>
              <li>
                <Link href={item[1]}>{item[0]}</Link>
              </li>
              <span>/</span>
            </Fragment>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export { Breadcrumbs };
