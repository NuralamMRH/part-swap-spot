
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mock';
import CategoryCard from '@/components/CategoryCard';

const CategoriesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Browse All Categories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the perfect parts for your vehicle by browsing our extensive categories. Each category contains quality parts from verified sellers.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      
      {/* Popular brands section */}
      <div className="py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Popular Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW" className="h-10" />
          </div>
          <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Toyota_Motor_Corporation_logo.svg" alt="Toyota" className="h-10" />
          </div>
          <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" alt="Ford" className="h-10" />
          </div>
          <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Mercedes-Logo.svg" alt="Mercedes" className="h-12" />
          </div>
          <div className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" alt="Volkswagen" className="h-10" />
          </div>
        </div>
      </div>
      
      {/* Benefits section */}
      <div className="bg-gray-50 rounded-lg p-8 mt-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">Why Shop by Category with Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our categorized marketplace makes it easier to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-auction-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Easy to Find</h3>
            <p className="text-gray-600">
              Our organized categories make it simple to find the specific parts you're looking for.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-auction-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Verified Quality</h3>
            <p className="text-gray-600">
              All listings are checked for accuracy and our sellers are verified for reliability.
            </p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-auction-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Save Time</h3>
            <p className="text-gray-600">
              Browse only relevant parts for your specific needs and find what you want faster.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/auctions" 
            className="inline-flex items-center justify-center px-6 py-3 bg-auction-primary text-white font-medium rounded-md hover:bg-auction-primary/90 transition-colors"
          >
            Browse All Auctions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
