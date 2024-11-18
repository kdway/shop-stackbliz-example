import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    category: "electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    rating: 4.5
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 199.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Elegant minimalist watch with leather strap",
    rating: 4.8
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: 399.99,
    category: "home",
    image: "https://images.unsplash.com/photo-1532372320978-9b4d6a3a854c?w=500&q=80",
    description: "Contemporary coffee table with storage",
    rating: 4.3
  },
  {
    id: 4,
    name: "Bestseller Novel",
    price: 24.99,
    category: "books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80",
    description: "Award-winning contemporary fiction",
    rating: 4.7
  },
  // Add more products as needed
];