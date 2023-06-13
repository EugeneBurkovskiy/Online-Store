export const getAllProducts = async (limit = 30) => {
  const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);

  if (!response.ok) throw new Error('Unable to fetch products');

  return response.json();
};
