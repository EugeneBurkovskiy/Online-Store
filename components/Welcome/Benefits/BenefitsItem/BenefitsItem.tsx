import Image, { StaticImageData } from 'next/image';

interface IProps {
  src: StaticImageData;
  alt: string;
  text: string;
}

const BenefitsItem = ({ src, alt, text }: IProps) => {
  return (
    <li className="w-[300px] sm:w-[400px]">
      <Image src={src} alt={alt} className="w-full" />
      <p className="text-justify">{text}</p>
    </li>
  );
};

export { BenefitsItem };
