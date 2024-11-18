import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../types';
import Button from '../sections/Button';
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex items-center">
            <Button />
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
