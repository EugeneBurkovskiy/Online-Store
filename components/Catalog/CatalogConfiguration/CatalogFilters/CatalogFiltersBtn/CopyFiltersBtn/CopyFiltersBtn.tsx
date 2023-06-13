import { useState } from 'react';

import { CustomButton } from '@/components/UI/CustomButton/CustomButton';

const CopyFiltersBtn = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyHandler = async () => {
    await navigator.clipboard.writeText(location.href);
    setCopySuccess(true);

    setTimeout(() => setCopySuccess(false), 500);
  };

  return (
    <CustomButton
      title={copySuccess ? 'Copied' : 'Copy Filters'}
      onClick={copyHandler}
      className="w-[130px]"
    />
  );
};

export { CopyFiltersBtn };
