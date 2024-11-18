import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function Sidebar({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
}: SidebarProps) {
  const categories: Category[] = ['all', 'electronics', 'clothing', 'books', 'home'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Price Range</h2>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}