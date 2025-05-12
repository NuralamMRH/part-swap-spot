
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { auctions } from '@/data/mock';
import { Auction, Bid } from '@/types';
import { 
  Clock, 
  MapPin, 
  User, 
  Star, 
  Share2, 
  Heart, 
  AlertCircle, 
  Truck,
  Wine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { formatDistanceToNow } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import AuthModal from './AuthModal';

const AuctionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const auction = auctions.find(auction => auction.id === id) as Auction;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bidAmount, setBidAmount] = useState('');
  const [isBidding, setIsBidding] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // In a real app, this would come from auth state
  
  if (!auction) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Auction Not Found</h2>
        <p>The auction you're looking for doesn't exist or has been removed.</p>
        <Button className="mt-4" asChild>
          <a href="/auctions">Browse All Auctions</a>
        </Button>
      </div>
    );
  }
  
  const timeLeft = formatDistanceToNow(new Date(auction.endTime), { addSuffix: true });
  const isEnding = new Date(auction.endTime).getTime() - Date.now() < 24 * 60 * 60 * 1000;
  
  // Generate lot information with a reasonable default
  const lotInfo = {
    lotNumber: parseInt(auction.id.substring(0, 2), 16) % 1000 + 1, // Generate a "random" lot number
    totalBottles: auction.lotSize || Math.floor(Math.random() * 6) + 1,
    bottlesSeparately: Math.random() > 0.7, // 30% chance of allowing separate bottle purchases
    minimumBid: auction.startingPrice
  };
  
  const handleBidClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    
    handleBid();
  };
  
  const handleBid = () => {
    setIsBidding(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsBidding(false);
      toast({
        title: "Bid placed successfully!",
        description: `You placed a bid of $${bidAmount} on ${auction.title}`,
      });
      setBidAmount('');
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Images */}
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden bg-gray-100 relative">
            <img 
              src={auction.images[currentImageIndex]} 
              alt={auction.title}
              className="w-full h-96 object-cover"
            />
            
            {/* Image navigation */}
            {auction.images.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {auction.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentImageIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Thumbnails */}
          {auction.images.length > 1 && (
            <div className="flex mt-4 space-x-4 overflow-x-auto pb-2">
              {auction.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                    currentImageIndex === index ? "border-auction-primary" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
          
          {/* Description tabs */}
          <div className="mt-8">
            <Tabs defaultValue="description">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Wine Details</TabsTrigger>
                <TabsTrigger value="lot">Lot Information</TabsTrigger>
                <TabsTrigger value="shipping">Shipping</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="p-4">
                <div className="prose max-w-none">
                  <p>{auction.description}</p>
                  <h4 className="text-lg font-medium mt-4">Features:</h4>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Premium {auction.vintage || "vintage"} wine from {auction.winery || "renowned winery"}</li>
                    <li>Excellent storage conditions</li>
                    <li>Original packaging and labels</li>
                    <li>Authentic provenance documentation</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Condition</span>
                      <span>{auction.condition}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Vintage</span>
                      <span>{auction.vintage || "N/A"}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Winery</span>
                      <span>{auction.winery || auction.brand || "N/A"}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Region</span>
                      <span>{auction.region || "N/A"}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Grape Variety</span>
                      <span>{auction.grapeVariety || "N/A"}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Alcohol Content</span>
                      <span>{auction.alcoholContent || "12-14%"}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Bottle Size</span>
                      <span>{auction.bottleSize || "750ml"}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Category</span>
                      <span>{auction.category}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="lot" className="p-4">
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Lot #{lotInfo.lotNumber}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Total Bottles:</span>
                          <span className="text-lg">{lotInfo.totalBottles}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Bid Type:</span>
                          <span>{lotInfo.bottlesSeparately ? "Per Bottle or Full Lot" : "Full Lot Only"}</span>
                        </div>
                        
                        {lotInfo.bottlesSeparately && (
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Price Per Bottle:</span>
                            <span>${(auction.currentBid || auction.startingPrice) / lotInfo.totalBottles}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Minimum Bid:</span>
                          <span>${lotInfo.minimumBid}</span>
                        </div>
                        
                        <div className="border-t pt-4 mt-4">
                          <h4 className="font-medium mb-2">Bidding Options:</h4>
                          {lotInfo.bottlesSeparately ? (
                            <div className="space-y-2">
                              <Button variant="outline" className="w-full justify-start">
                                <Wine className="mr-2 h-4 w-4" />
                                Bid on Single Bottle (${Math.floor((auction.currentBid || auction.startingPrice) / lotInfo.totalBottles)})
                              </Button>
                              <Button variant="default" className="w-full justify-start">
                                <Wine className="mr-2 h-4 w-4" />
                                Bid on Entire Lot (${auction.currentBid || auction.startingPrice})
                              </Button>
                            </div>
                          ) : (
                            <div>
                              <p className="text-sm text-gray-600 mb-2">
                                This lot can only be purchased in its entirety.
                              </p>
                              <Button variant="default" className="w-full justify-start">
                                <Wine className="mr-2 h-4 w-4" />
                                Bid on Entire Lot (${auction.currentBid || auction.startingPrice})
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping" className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Truck className="mt-1 h-5 w-5 text-auction-primary flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium">Shipping Information</h4>
                      <p className="text-gray-600 mt-1">
                        This wine lot ships from {auction.location}. Shipping costs are calculated based on the buyer's location.
                      </p>
                      <p className="text-gray-600 mt-1">
                        Wine is carefully packaged in temperature-controlled containers to ensure quality during transit.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <AlertCircle className="mt-1 h-5 w-5 text-auction-primary flex-shrink-0" />
                    <div className="ml-3">
                      <h4 className="font-medium">Returns Policy</h4>
                      <p className="text-gray-600 mt-1">
                        Returns accepted within 14 days if the wine doesn't match the description. 
                        Cork issues or authenticity concerns must be reported immediately upon receipt.
                        Buyer is responsible for return shipping costs.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Bid history */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Bid History</CardTitle>
              <CardDescription>
                {auction.bids.length} {auction.bids.length === 1 ? 'bid' : 'bids'} placed on this wine lot
              </CardDescription>
            </CardHeader>
            <CardContent>
              {auction.bids.length > 0 ? (
                <div className="space-y-3">
                  {auction.bids.map((bid) => (
                    <div key={bid.id} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                          {bid.userName[0]}
                        </div>
                        <div className="ml-2">
                          <div className="font-medium">{bid.userName}</div>
                          <div className="text-xs text-gray-500">
                            {formatDistanceToNow(new Date(bid.timestamp), { addSuffix: true })}
                          </div>
                        </div>
                      </div>
                      <div className="font-medium">${bid.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-4">No bids yet. Be the first to place a bid!</p>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Details & Bidding */}
        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="bg-gray-100">
                  {auction.category}
                </Badge>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-2xl mt-2">{auction.title}</CardTitle>
              
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 text-gray-500 mr-1.5" />
                <span className={`text-sm ${isEnding ? 'text-auction-secondary font-medium' : 'text-gray-500'}`}>
                  {isEnding ? 'Ending soon! ' : ''}{timeLeft}
                </span>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {/* Current price */}
                <div>
                  <div className="text-sm text-gray-500">Current bid:</div>
                  <div className="text-3xl font-bold text-auction-primary">
                    ${auction.currentBid?.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Lot #{lotInfo.lotNumber}: {lotInfo.totalBottles} bottle{lotInfo.totalBottles > 1 ? 's' : ''}
                  </div>
                </div>
                
                {/* Buy now price */}
                {auction.buyNowPrice && (
                  <div>
                    <div className="text-sm text-gray-500">Buy now price:</div>
                    <div className="text-xl font-semibold">${auction.buyNowPrice.toLocaleString()}</div>
                  </div>
                )}
                
                {/* Bid form */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex space-x-2 mb-4">
                    <Input 
                      type="number"
                      placeholder={`$${(auction.currentBid || 0) + 50}`} 
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                    />
                    <Button disabled={!bidAmount || isBidding} onClick={handleBidClick}>
                      {isBidding ? "Placing bid..." : "Place Bid"}
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Enter {(auction.currentBid || 0) + 50} or more
                  </p>
                  
                  {/* Buy now button */}
                  {auction.buyNowPrice && (
                    <Button className="w-full mt-4" variant="secondary" onClick={handleBidClick}>
                      Buy Now ${auction.buyNowPrice.toLocaleString()}
                    </Button>
                  )}
                </div>
                
                {/* Seller info */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">{auction.sellerName}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Star className="fill-yellow-400 stroke-yellow-400 h-4 w-4 mr-1" />
                        {auction.sellerRating} · Verified Seller
                      </div>
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full mt-4">
                        Contact Seller
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Message to {auction.sellerName}</DialogTitle>
                        <DialogDescription>
                          Ask a question about this wine lot
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <Input
                          className="mb-4"
                          placeholder="Subject"
                          defaultValue={`Question about: ${auction.title}`}
                        />
                        <textarea
                          className="w-full h-24 p-2 border rounded-md"
                          placeholder="Your message here..."
                        ></textarea>
                      </div>
                      <DialogFooter>
                        <Button onClick={() => toast({ title: "Message sent!" })}>
                          Send Message
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                
                {/* Location */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{auction.location}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col">
              <div className="w-full text-center text-xs text-gray-500">
                By placing a bid, you agree to our Terms of Service and Privacy Policy
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      {/* Authentication Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
};

export default AuctionDetails;
