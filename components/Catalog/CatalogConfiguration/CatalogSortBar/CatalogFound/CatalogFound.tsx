'use client';

import { useProductsCount } from '@/store/productsCountStore';

const CatalogFound = () => {
  const { totalCount, foundCount } = useProductsCount();

  return (
    <div className="text-lg">
      Found: {foundCount} of {totalCount}
    </div>
  );
};

export default CatalogFound;
