import CatalogProductItem from './CatalogProductItem/CatalogProductItem';

interface IProps {}

const CatalogProductsList: React.FC<IProps> = ({}) => {
  return (
    <ul className="grid grid-cols-4 gap-6">
      <li>
        <CatalogProductItem />
      </li>
      <li>
        <CatalogProductItem />
      </li>
      <li>
        <CatalogProductItem />
      </li>
      <li>
        <CatalogProductItem />
      </li>
    </ul>
  );
};

export default CatalogProductsList;
