import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface IQueryObj {
  name: string;
  value: string;
}

interface ISearchParamsObj {
  search?: string;
  sort?: string;
  grid?: string;
  category?: string;
  brand?: string;
}

const useQueryURLManager = () => {
  const [queryObj, setQueryObj] = useState<IQueryObj>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const searchParamsObj: ISearchParamsObj = useMemo(() => {
    const paramsObj = Object.fromEntries(searchParams.entries());

    if (queryObj) {
      if (queryObj.value) {
        const clearQueryValue = queryObj.value.trim();
        paramsObj[queryObj.name] = clearQueryValue;
      } else {
        delete paramsObj[queryObj.name];
      }
    }

    return paramsObj;
  }, [queryObj, searchParams]);

  const newUrl = useMemo(() => {
    const searchParamsEntries = Object.entries(searchParamsObj);
    if (searchParamsEntries.length) {
      let startUrl = `${pathname}?`;
      const formattedSearchParamsEntries = searchParamsEntries.map((item) => item.join('='));
      const pathnameWithQueries = `${startUrl}${formattedSearchParamsEntries.join('&')}`;
      return pathnameWithQueries;
    }

    return pathname;
  }, [pathname, searchParamsObj]);

  useEffect(() => {
    router.push(newUrl);
  }, [newUrl, router]);

  return { setQueryObj, searchParamsObj };
};

export { useQueryURLManager };
