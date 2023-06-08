import { useEffect, useState } from 'react';

const useDebounce = (value: string) => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebounceValue(value), 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return { debouncedValue };
};

export { useDebounce };
