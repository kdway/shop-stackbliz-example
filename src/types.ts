export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
}

export type Category = 'all' | 'electronics' | 'clothing' | 'books' | 'home';