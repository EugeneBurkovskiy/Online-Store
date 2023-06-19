'use client';

import { useState } from 'react';
import useSWR from 'swr';

import { IProduct } from '@/types/types';

import { ProductDescription } from './ProductDescription/ProductDescription';
import { ProductImages } from './ProductImages/ProductImages';
import { ErrorText } from '../UI/ErrorText/ErrorText';
import { LoadingComponent } from '../UI/LoadingComponent/LoadingComponent';
import { getSingleProduct } from '@/service/getSingleProduct';
import { Form } from '../Form/Form';
import { Overlay } from '../UI/Overlay/Overlay';

interface IProps {
  productId: string;
}

const ProductDetails = ({ productId }: IProps) => {
  const { data, error, isValidating } = useSWR<IProduct | null>(
    'product',
    () => getSingleProduct(productId),
    { revalidateOnFocus: false },
  );
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    (isValidating && <LoadingComponent />) ||
    (data && (
      <>
        <article className="flex gap-8 py-5 md:flex-row flex-col">
          <ProductImages images={data.images} />
          <ProductDescription productData={data} handleModal={handleShowModal} />
        </article>
        <Overlay show={showModal} setShow={setShowModal}>
          <Form handleModal={handleShowModal} />
        </Overlay>
      </>
    )) ||
    (error && <ErrorText />)
  );
};

export { ProductDetails };
