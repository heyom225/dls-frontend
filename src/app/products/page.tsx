"use client";

import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { products, productCategories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Product Catalog</h1>
        <p className="mt-2 text-lg text-foreground/80">Explore our curated collection of cutting-edge tech.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <h2 className="text-2xl font-headline font-semibold mb-4">Filters</h2>
            
            <div className="relative mb-6">
              <Input 
                placeholder="Search products..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="flex flex-col gap-2">
                {productCategories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategories.includes(category) ? 'secondary' : 'ghost'}
                    onClick={() => toggleCategory(category)}
                    className="justify-start"
                  >
                    {category}
                  </Button>
                ))}
                {selectedCategories.length > 0 && (
                  <Button
                    variant="link"
                    onClick={() => setSelectedCategories([])}
                    className="text-primary p-0 h-auto mt-2 justify-start"
                  >
                    Clear all
                  </Button>
                )}
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 lg:w-4/5">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-lg">
              <h3 className="text-2xl font-semibold">No Products Found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
