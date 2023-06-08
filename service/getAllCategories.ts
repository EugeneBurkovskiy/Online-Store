export const getAllCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');

  if (!response.ok) throw new Error('Unable to fetch categories');

  return response.json();
};
