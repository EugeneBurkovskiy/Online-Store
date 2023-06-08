import { CustomCheckbox } from '@/components/CustomCheckbox/CustomCheckbox';

interface IProps {
  title: string;
  data: string[];
}

const CatalogFiltersList = ({ title, data }: IProps) => {
  return (
    <div className="border-t border-solid py-3">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="h-[300px] overflow-y-scroll flex flex-col gap-2">
        {data.map((item) => (
          <li key={item}>
            <CustomCheckbox title={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { CatalogFiltersList };
