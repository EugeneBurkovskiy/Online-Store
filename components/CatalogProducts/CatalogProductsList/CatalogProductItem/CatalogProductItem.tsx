import Image from 'next/image';
interface IProps {}

const CatalogProductionItem: React.FC<IProps> = ({}) => {
  return (
    <div>
      <Image src=" https://picsum.photos/id/237/200/300" alt="Cart" width={500} height={500} />
      <h4 className="text-2xl text-center text-black">Title</h4>
      <p className="text-2xl text-center text-black">★★★☆☆</p>
      <p className="text-2xl text-gray text-center">41$</p>
    </div>
  );
};

export default CatalogProductionItem;
