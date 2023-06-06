export const getAllProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');

  if (!response.ok) throw new Error('Unable to fetch products');

  return response.json();
};
