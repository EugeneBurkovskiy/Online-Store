const CatalogSort = () => {
  return (
    <select className="text-lg cursor-pointer">
      <option value="default">Sort by default</option>
      <option value="price-ASC">Sort by price: low to high</option>
      <option value="price-DESC">Sort by price: high to low</option>
      <option value="rating-ASC">Sort by rating: low to high</option>
      <option value="rating-DESC">Sort by rating: high to low</option>
    </select>
  );
};

export default CatalogSort;
