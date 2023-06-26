export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ICartProduct {
  id: number;
}

export interface IAllProductsData {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface IRegister {
  name: string;
  surname: string;
  phone: string;
  adress: string;
  email: string;
  card: string;
  date: string;
  cvv: string;
}
