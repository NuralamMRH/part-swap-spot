
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, Wine, Truck, Award, DollarSign } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">How Wine Auctions Work</h1>
        <p className="text-lg text-gray-600">
          Our platform connects wine enthusiasts with exceptional wines from around the world.
          Below is a step-by-step guide to buying and selling on our platform.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-auction-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
            For Buyers
          </h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Wine className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Browse Wine Lots</h3>
                <p className="text-gray-600">
                  Explore our extensive selection of wines from prestigious vineyards worldwide.
                  Use filters to find specific vintages, wineries, or regions that interest you.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Check className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Register & Place Bids</h3>
                <p className="text-gray-600">
                  Create an account to place bids on your favorite wines. You can bid on individual 
                  bottles or entire lots depending on the seller's preferences.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Award className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Win Auctions</h3>
                <p className="text-gray-600">
                  If your bid is the highest when the auction ends, you'll receive a notification
                  that you've won. You can also use the "Buy Now" option for immediate purchase
                  if available.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Truck className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Receive Your Wine</h3>
                <p className="text-gray-600">
                  After payment, the seller will arrange for secure shipping of your wine.
                  All shipments include temperature control to maintain quality during transit.
                </p>
              </div>
            </div>
          </div>
          
          <Button asChild className="mt-8">
            <Link to="/auctions">Start Browsing</Link>
          </Button>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-auction-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
            For Sellers
          </h2>
          
          <div className="space-y-8">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Check className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Register as a Seller</h3>
                <p className="text-gray-600">
                  Create an account and complete the seller verification process.
                  We verify identities to ensure a safe marketplace for all users.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Wine className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">List Your Wine</h3>
                <p className="text-gray-600">
                  Submit detailed information about your wine, including vintage, region, condition,
                  and high-quality photos. Choose between lot sales or individual bottle listings.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <Award className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Auction Management</h3>
                <p className="text-gray-600">
                  Monitor bids and communicate with potential buyers through our secure
                  messaging system. Respond to inquiries to increase your chances of a successful sale.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="bg-auction-primary/10 p-2 rounded-full">
                  <DollarSign className="h-6 w-6 text-auction-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Get Paid</h3>
                <p className="text-gray-600">
                  Once the auction concludes and the buyer makes payment, you'll receive funds
                  directly to your account after shipping the wine and the buyer confirms receipt.
                </p>
              </div>
            </div>
          </div>
          
          <Button asChild className="mt-8">
            <Link to="/sell">Start Selling</Link>
          </Button>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">How do I verify the authenticity of wines?</h3>
            <p className="text-gray-600">
              All sellers are required to provide detailed provenance information and images of labels, corks, and certificates of authenticity when available. Our team also reviews listings for accuracy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">What payment methods are accepted?</h3>
            <p className="text-gray-600">
              We accept credit cards, bank transfers, and PayPal. All transactions are processed securely through our platform to protect both buyers and sellers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">How is shipping handled?</h3>
            <p className="text-gray-600">
              Sellers are responsible for packaging and shipping wines in temperature-controlled containers. Shipping costs are calculated based on the buyer's location and the size of the wine lot.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">What fees are involved?</h3>
            <p className="text-gray-600">
              Sellers pay a commission of 10% on successful sales. Buyers pay no additional fees beyond the winning bid amount and shipping costs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
        <p className="text-lg text-gray-600 mb-8">Join our community of wine enthusiasts today!</p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/register">Create Account</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/auctions">Browse Auctions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
