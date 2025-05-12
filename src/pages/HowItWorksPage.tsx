
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">How AutoBid Works</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Your comprehensive guide to buying and selling car parts on our auction platform
        </p>
        
        {/* For Buyers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 rounded-full bg-auction-primary text-white flex items-center justify-center mr-3 text-lg">1</span>
            For Buyers
          </h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold mb-3">Create an Account</h3>
                <p className="text-gray-600 mb-4">
                  Sign up for a free account to start browsing and bidding on car parts auctions. 
                  We require identity verification to ensure a safe and secure environment for all users.
                </p>
                <Button asChild>
                  <Link to="/register">Create Account</Link>
                </Button>
              </div>
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=500&auto=format&fit=crop"
                  alt="Create Account"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 order-1 md:order-0">
                <img 
                  src="https://images.unsplash.com/photo-1581092198498-a732e2f558bd?q=80&w=500&auto=format&fit=crop"
                  alt="Browse Listings"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:col-span-7 order-0 md:order-1">
                <h3 className="text-xl font-semibold mb-3">Browse Listings</h3>
                <p className="text-gray-600 mb-4">
                  Search for parts by category, brand, model, or keyword. Use filters to narrow down results 
                  and find exactly what you're looking for. Each listing includes detailed information about 
                  the part, its condition, and the seller's rating.
                </p>
                <Button asChild>
                  <Link to="/auctions">Browse Auctions</Link>
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold mb-3">Place Bids</h3>
                <p className="text-gray-600 mb-4">
                  When you find a part you want, you can place bids or use the "Buy Now" option if available. 
                  Bidding is simple - enter an amount higher than the current bid and confirm. You'll receive 
                  notifications if you're outbid or when the auction is ending.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-2">Bidding Tips:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Set a maximum budget before bidding</li>
                    <li>Check the seller's rating and reviews</li>
                    <li>Verify the part's compatibility with your vehicle</li>
                    <li>Consider shipping costs in your total budget</li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1589758438368-0ad531db3366?q=80&w=500&auto=format&fit=crop"
                  alt="Place Bids"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 order-1 md:order-0">
                <img 
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=500&auto=format&fit=crop"
                  alt="Win & Pay"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:col-span-7 order-0 md:order-1">
                <h3 className="text-xl font-semibold mb-3">Win & Pay</h3>
                <p className="text-gray-600 mb-4">
                  If you win the auction, you'll be notified immediately. Complete your payment through our 
                  secure payment system. We hold the payment in escrow until you confirm receipt of the item,
                  providing protection for both buyers and sellers.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2">Buyer Protection:</h4>
                  <p className="text-blue-700 text-sm">
                    Our escrow system ensures you only release payment after receiving and approving the item.
                    If there are any issues, our dispute resolution team is ready to assist.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold mb-3">Receive & Verify</h3>
                <p className="text-gray-600 mb-4">
                  The seller ships the item directly to you. Once received, you have 3 days to inspect the part 
                  and confirm it matches the description. If satisfied, approve the delivery and the payment is 
                  released to the seller. If there are issues, you can open a dispute.
                </p>
                <div className="flex space-x-3">
                  <Button asChild>
                    <Link to="/register">Create Account</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/auctions">Start Browsing</Link>
                  </Button>
                </div>
              </div>
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&w=500&auto=format&fit=crop"
                  alt="Receive & Verify"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* For Sellers */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="w-10 h-10 rounded-full bg-auction-secondary text-white flex items-center justify-center mr-3 text-lg">2</span>
            For Sellers
          </h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold mb-3">Create a Seller Account</h3>
                <p className="text-gray-600 mb-4">
                  To start selling, you need to verify your identity and connect a payment method to receive funds.
                  This ensures trust and security for all platform users.
                </p>
                <Button asChild>
                  <Link to="/sell">Start Selling</Link>
                </Button>
              </div>
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=500&auto=format&fit=crop"
                  alt="Create Seller Account"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 order-1 md:order-0">
                <img 
                  src="https://images.unsplash.com/photo-1616400619175-5beda3a17896?q=80&w=500&auto=format&fit=crop"
                  alt="Create Listing"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:col-span-7 order-0 md:order-1">
                <h3 className="text-xl font-semibold mb-3">Create a Listing</h3>
                <p className="text-gray-600 mb-4">
                  List your item with detailed descriptions, clear photos from multiple angles, and accurate
                  condition information. Set your starting price, auction duration, and shipping options.
                  You can also add a "Buy Now" price for immediate purchase.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium mb-2">Listing Tips:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Use clear, detailed titles with brand and model info</li>
                    <li>Take high-quality photos in good lighting</li>
                    <li>Be honest about the condition and any defects</li>
                    <li>Include dimensions and compatibility information</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7">
                <h3 className="text-xl font-semibold mb-3">Manage Bids</h3>
                <p className="text-gray-600 mb-4">
                  Once your listing is live, you can track bids, answer questions from potential buyers, and
                  monitor the auction progress. Our system automatically notifies the winner and facilitates
                  the payment process when the auction ends.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/sell">Create Your Listing</Link>
                </Button>
              </div>
              <div className="md:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
                  alt="Manage Bids"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 order-1 md:order-0">
                <img 
                  src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=500&auto=format&fit=crop"
                  alt="Ship & Get Paid"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="md:col-span-7 order-0 md:order-1">
                <h3 className="text-xl font-semibold mb-3">Ship & Get Paid</h3>
                <p className="text-gray-600 mb-4">
                  After the auction ends and the buyer pays, you'll receive shipping details. Package the item
                  securely and ship it promptly with tracking. Once the buyer confirms receipt, the funds are
                  released to your account (minus platform fees).
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-medium text-green-800 mb-2">Seller Protection:</h4>
                  <p className="text-green-700 text-sm">
                    We verify buyer payment before you ship, and funds are held securely until the transaction is complete. 
                    This protects you from payment fraud and ensures you get paid for legitimate sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gray-50 p-8 rounded-lg mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">What fees does AutoBid charge?</h3>
              <p className="text-gray-600">
                Buyers pay no fees to bid or purchase. Sellers pay a 10% commission on successful sales, 
                with a minimum of $1 and maximum of $250 per item sold.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">How is payment handled?</h3>
              <p className="text-gray-600">
                All payments go through our secure escrow system. Buyers pay AutoBid, we hold the funds until 
                the item is received and approved, then release payment to the seller.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">What if I receive a damaged item?</h3>
              <p className="text-gray-600">
                If the item doesn't match the description or arrives damaged, you can open a dispute within 
                3 days of delivery. Our support team will review the case and help resolve the issue.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-medium mb-2">How do I ship items as a seller?</h3>
              <p className="text-gray-600">
                You're responsible for packaging and shipping your sold items. We recommend using tracked 
                shipping methods and proper packaging to ensure items arrive safely.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Can I cancel a bid or auction?</h3>
              <p className="text-gray-600">
                Buyers can retract bids in exceptional circumstances by contacting support. Sellers can cancel 
                auctions only if no bids have been placed or in case of documented emergency situations.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Join our community of automotive enthusiasts and start buying or selling car parts today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/register">Create Account</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/auctions">Browse Auctions</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
