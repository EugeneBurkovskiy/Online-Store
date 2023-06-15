export const getSingleProduct = async (id: string) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) throw new Error('Unable to fetch product');

  return response.json();
};
