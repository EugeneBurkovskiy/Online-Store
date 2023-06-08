export const getAllProductsBySearch = async (search: string) => {
  const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);

  if (!response.ok) throw new Error('Unable to fetch search');

  return response.json();
};
