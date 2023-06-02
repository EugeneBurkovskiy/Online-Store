import CustomCheckbox from '@/components/CustomCheckbox/CustomCheckbox';

interface IProps {
  title: string;
}

const CatalogFiltersList: React.FC<IProps> = ({ title }) => {
  return (
    <div className="border-t border-solid py-3">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="h-[300px] overflow-y-scroll flex flex-col gap-2">
        <li>
          <CustomCheckbox />
        </li>
      </ul>
    </div>
  );
};

export default CatalogFiltersList;
