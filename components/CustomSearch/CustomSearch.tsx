import Image from 'next/image';
import SearchIcon from '../../public/icons/search.svg';

interface IProps {}

const CustomSearch: React.FC<IProps> = ({}) => {
  return (
    <div>
      <label htmlFor="search" className="relative text-lg">
        <div className="absolute bottom-0 right-0">
          <Image priority src={SearchIcon} alt="Search" width={25} />
        </div>
        <input
          id="search"
          type="text"
          className="border-b border-black border-solid"
          placeholder="Serach"
        />
      </label>
    </div>
  );
};

export default CustomSearch;
