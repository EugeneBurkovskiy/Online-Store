import { ChangeEvent, useEffect, useState } from 'react';

import { CustomCheckbox } from '@/components/UI/CustomCheckbox/CustomCheckbox';
import { useQueryURLManager } from '@/hooks/useQueryURLManager';

interface IProps {
  title: string;
  data: string[];
  queryParamName: string;
}

const CatalogFiltersList = ({ title, data, queryParamName }: IProps) => {
  const { searchParamsObj, setQueryObj } = useQueryURLManager();
  const { category } = searchParamsObj;
  const [checkedValues, setCheckedValues] = useState<string[]>(category?.split(',') || []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    const checked = e.currentTarget.checked;
    if (checked) {
      setCheckedValues((prev) => [...prev, value]);
    } else {
      setCheckedValues((prev) => {
        const index = prev.indexOf(value);
        prev.splice(index, 1);
        return [...prev];
      });
    }
  };

  useEffect(() => {
    const queryString = checkedValues.join(',');
    setQueryObj({ name: queryParamName, value: queryString });
  }, [checkedValues, queryParamName, setQueryObj]);

  return (
    <div className="border-t border-solid py-3">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="h-[300px] overflow-y-scroll flex flex-col gap-2">
        {data.map((item) => (
          <li key={item}>
            <CustomCheckbox
              title={item}
              handleChange={handleChange}
              checked={checkedValues.includes(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CatalogFiltersList };
