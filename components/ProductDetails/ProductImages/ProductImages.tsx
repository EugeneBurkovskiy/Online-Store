import Image from 'next/image';
import { useState } from 'react';

interface IProps {
  images: string[];
}

const ProductImages = ({ images }: IProps) => {
  const [currentImage, setCurrentImage] = useState<string>(images[0]);

  return (
    <section className="flex flex-col gap-8 items-center">
      <div className="sm:w-[500px] lg:w-[600px] w-[300px] h-[150px] sm:h-[350px] overflow-hidden">
        <Image
          src={currentImage}
          alt="mainImage"
          width={500}
          height={500}
          className="object-contain h-full w-full"
        />
      </div>
      <ul className="flex gap-2 flex-wrap justify-center items-center">
        {images.map((image, i) => (
          <button
            className={`md:w-[100px] md:h-[100px] w-[80px] h-[80px] overflow-hidden md:hover:scale-110 duration-simple ${
              image === currentImage && 'border-2 border-black border-solid'
            }`}
            key={image}
            onClick={() => setCurrentImage(image)}
          >
            <Image
              src={image}
              alt={`photo${i}`}
              width={500}
              height={500}
              className="object-contain h-full w-full"
            />
          </button>
        ))}
      </ul>
    </section>
  );
};

export { ProductImages };
