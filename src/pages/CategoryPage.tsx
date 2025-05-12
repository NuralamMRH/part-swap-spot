
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { auctions, categories } from '@/data/mock';
import AuctionCard from '@/components/AuctionCard';

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the selected category
  const category = categories.find(c => c.slug === slug);
  
  // Filter auctions by category
  const categoryAuctions = auctions.filter(auction => 
    category && auction.category === category.name
  );
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Category not found</h1>
        <p className="text-gray-600 mb-8">The category you are looking for does not exist.</p>
        <Link 
          to="/categories" 
          className="inline-flex items-center text-auction-primary hover:underline"
        >
          Back to all categories
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-auction-primary">Home</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link to="/categories" className="hover:text-auction-primary">Categories</Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="font-medium text-gray-900">{category.name}</span>
      </div>
      
      {/* Hero banner */}
      <div 
        className="relative h-64 rounded-lg overflow-hidden mb-8 bg-gray-800"
      >
        <img 
          src={category.imageUrl} 
          alt={category.name} 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
          <p className="text-white text-lg opacity-90">{category.count} listings available</p>
        </div>
      </div>
      
      {/* Category description */}
      <div className="mb-10">
        <p className="text-gray-600">
          Browse all {category.name.toLowerCase()} parts available for auction. From new to used parts,
          find everything you need for your vehicle maintenance and upgrades.
        </p>
      </div>
      
      {/* Auction listings */}
      <h2 className="text-2xl font-bold mb-6">Available {category.name} Parts</h2>
      
      {categoryAuctions.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {categoryAuctions.map(auction => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-2">No listings available</h3>
          <p className="text-gray-500">Check back soon for new auctions in this category</p>
        </div>
      )}
      
      {/* Related categories */}
      <div className="mt-16">
        <h3 className="text-xl font-bold mb-6">Other Categories You Might Like</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories
            .filter(c => c.slug !== slug)
            .slice(0, 4)
            .map(relatedCategory => (
              <Link 
                key={relatedCategory.id}
                to={`/category/${relatedCategory.slug}`}
                className="relative h-32 rounded-lg overflow-hidden group"
              >
                <img 
                  src={relatedCategory.imageUrl} 
                  alt={relatedCategory.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h4 className="text-white font-medium">{relatedCategory.name}</h4>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
