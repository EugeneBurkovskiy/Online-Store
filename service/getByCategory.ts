export const getByCategory = async (categoryArr: string[]) => {
  const response = await Promise.all(
    categoryArr.map((category) => fetch(`https://dummyjson.com/products/category/${category}`)),
  );

  const responseStatus = response.every((item) => item.ok);
  if (!responseStatus) throw new Error('Unable to fetch category');

  const responseJSON = await Promise.all(response.map((item) => item.json()));

  return responseJSON;
};
