
import React from 'react';
import CreateAuctionForm from '@/components/CreateAuctionForm';

const SellPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-50 py-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sell Your Car Parts</h1>
          <p className="text-xl text-gray-600 mb-6">
            Turn your unused auto parts into cash by listing them on our auction platform
          </p>
          
          <div className="flex justify-center space-x-8 mt-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-auction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-auction-primary">1</span>
              </div>
              <h3 className="font-medium">Create Listing</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-auction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-auction-primary">2</span>
              </div>
              <h3 className="font-medium">Get Bids</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-auction-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-auction-primary">3</span>
              </div>
              <h3 className="font-medium">Ship & Get Paid</h3>
            </div>
          </div>
        </div>
      </div>
      
      <CreateAuctionForm />
    </div>
  );
};

export default SellPage;
