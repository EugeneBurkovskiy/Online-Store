import { useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface IQueryObj {
  name: string;
  value: string;
}

const useQueryURLManager = () => {
  const [queryObj, setQueryObj] = useState<IQueryObj>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const searchParamsObj = useMemo(() => {
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
    const searchParamsKeys = Object.keys(searchParamsObj);

    if (searchParamsKeys.length) {
      let startUrl = `${pathname}?`;

      const finalUrl = searchParamsKeys.reduce((url, item) => {
        url += `${item}=${encodeURIComponent(searchParamsObj[item])}`;

        if (searchParamsKeys[searchParamsKeys.length - 1] === item) {
          return url;
        }
        return `${url}&`;
      }, startUrl);

      return finalUrl;
    }
    return pathname;
  }, [pathname, searchParamsObj]);

  useEffect(() => {
    router.push(newUrl);
  }, [newUrl, router]);

  return { setQueryObj, searchParamsObj };
};

export { useQueryURLManager };
