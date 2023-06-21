import { CustomButton } from '@/components/UI/CustomButton/CustomButton';
import Link from 'next/link';

const StartButton = () => {
  return (
    <section className="flex justify-center py-5 border-solid border-t border-b border-gray">
      <CustomButton className="p-0 h-[50px] w-[200px]">
        <Link href={'catalog'} className="w-full h-full flex items-center justify-center">
          Start Shopping
        </Link>
      </CustomButton>
    </section>
  );
};

export { StartButton };
