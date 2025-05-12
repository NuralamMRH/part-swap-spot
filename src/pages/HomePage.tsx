
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BadgeDollarSign, Shield, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AuctionCard from '@/components/AuctionCard';
import CategoryCard from '@/components/CategoryCard';
import { auctions, categories } from '@/data/mock';

const HomePage: React.FC = () => {
  // Get featured auctions (we'll just use the first 4)
  const featuredAuctions = auctions.slice(0, 4);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 px-4 bg-gradient-to-r from-auction-primary to-blue-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1589189726492-306c933fcd80?q=80&w=1800&auto=format&fit=crop"
            alt="Car parts background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Find the Perfect Car Parts at Great Prices
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Bid on thousands of quality auto parts from verified sellers around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Search parts by name, brand, model..." 
                  className="pl-10 text-gray-900 h-12 w-full rounded-lg"
                />
              </div>
              <Button 
                size="lg" 
                className="bg-auction-secondary hover:bg-auction-secondary/90 text-white"
              >
                Search
              </Button>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-sm opacity-80">Popular searches:</span>
              <Link to="/search?q=bmw+engine" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                BMW Engine
              </Link>
              <Link to="/search?q=ford+transmission" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                Ford Transmission
              </Link>
              <Link to="/search?q=toyota+suspension" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                Toyota Suspension
              </Link>
              <Link to="/search?q=honda+exhaust" className="text-sm opacity-90 hover:opacity-100 hover:underline">
                Honda Exhaust
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Browse Categories</h2>
              <p className="text-gray-600">Find the perfect parts for your vehicle by category</p>
            </div>
            <Link to="/categories" className="flex items-center text-auction-primary font-medium hover:underline mt-4 md:mt-0">
              View all categories
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Auctions Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Auctions</h2>
              <p className="text-gray-600">Popular items with active bidding</p>
            </div>
            <Link to="/auctions" className="flex items-center text-auction-primary font-medium hover:underline mt-4 md:mt-0">
              View all auctions
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAuctions.map(auction => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="px-8">
              <Link to="/auctions">Explore All Auctions</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">How AutoBid Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy to buy and sell car parts through a secure and transparent auction process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-auction-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Find & Bid</h3>
              <p className="text-gray-600">
                Browse thousands of quality parts and place bids on the items you want. Filter by category, brand, or price.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgeDollarSign className="h-8 w-8 text-auction-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Win & Pay</h3>
              <p className="text-gray-600">
                When you win an auction, pay securely through our platform. Your payment is held securely until you receive the item.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-auction-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive & Enjoy</h3>
              <p className="text-gray-600">
                The seller ships the item directly to you. Once received and approved, the payment is released to the seller.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link to="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Trust & Safety */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Safe & Secure Transactions</h2>
              <p className="text-gray-600 mb-6">
                At AutoBid, we prioritize your safety and security. Our platform provides a reliable environment for buying and selling car parts with confidence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-auction-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Verified Sellers</h3>
                    <p className="text-gray-600 mt-1">
                      All sellers go through a strict verification process to ensure reliability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-auction-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Secure Payments</h3>
                    <p className="text-gray-600 mt-1">
                      All payments are processed through our secure platform with buyer protection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Shield className="h-5 w-5 text-auction-primary" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">Dispute Resolution</h3>
                    <p className="text-gray-600 mt-1">
                      Our dedicated support team helps resolve any issues that may arise during transactions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild>
                  <Link to="/trust-and-safety">Learn About Trust & Safety</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
                alt="Secure transactions"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-auction-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of buyers and sellers on our auto parts marketplace
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-auction-primary hover:bg-gray-100 px-6"
              asChild
            >
              <Link to="/register">Create Account</Link>
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-6"
              asChild
            >
              <Link to="/auctions">Browse Auctions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
