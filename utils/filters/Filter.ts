import { IProduct } from '@/types/types';

class Filter {
  products: IProduct[];

  constructor(products: IProduct[]) {
    this.products = products;
  }

  sortAllProducts = (param: string) => {
    switch (param) {
      case 'price-ASC':
        this.products = this.products.sort((a, b) => a.price - b.price);
        break;
      case 'price-DESC':
        this.products = this.products.sort((a, b) => b.price - a.price);
        break;
      case 'rating-ASC':
        this.products = this.products.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-DESC':
        this.products = this.products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        this.products = this.products.sort((a, b) => b.rating - a.rating);
        break;
    }
    return this;
  };

  get filteredProducts() {
    return this.products;
  }
}

export { Filter };
