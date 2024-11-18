import React, { useState, useMemo } from 'react';
import { Menu } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import { products } from '../data/products';
import { Category } from '../types';
import SearchBar from '../components/SearchBar';
function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-5 mt-5">
            <SearchBar searchTerm={searchTerm} />
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside
              className={`lg:w-64 flex-shrink-0 ${
                isSidebarOpen ? 'block' : 'hidden lg:block'
              }`}
            >
              <Sidebar
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
              />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
