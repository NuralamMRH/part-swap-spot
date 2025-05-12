
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/types';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`} 
      className="group block relative overflow-hidden rounded-lg"
    >
      <div className="h-48 lg:h-60 bg-gray-200 relative">
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-90">{category.count} listings</span>
              <span className="flex items-center text-sm font-medium opacity-90 group-hover:opacity-100">
                Browse
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
