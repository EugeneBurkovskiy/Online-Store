import Image from 'next/image';
import LoadingIcon from '../../public/icons/clock.svg';

const LoadingComponent = () => {
  return (
    <div className="fixed left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
      <Image src={LoadingIcon} alt="Loading" width={100} height={100} />
    </div>
  );
};

export { LoadingComponent };
