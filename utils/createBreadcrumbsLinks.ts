export const createBreadcrumbsLinks = (link: string) => {
  const pathArr = link.split('/').slice(1);
  let str = '';
  const combinedPathArr = pathArr.map((item) => {
    str += `/${item}`;
    return [item, str];
  });
  return combinedPathArr;
};
