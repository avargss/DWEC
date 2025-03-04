export interface Product {
  productId: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    productId: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    productId: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    productId: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];