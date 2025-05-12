
import React, { useEffect, useState } from 'react';
import { Auction, Bid } from '@/types';
import { toast } from '@/components/ui/use-toast';
import { auctions } from '@/data/mock';

const BidNotification: React.FC = () => {
  const [latestBid, setLatestBid] = useState<{auction: Auction, bid: Bid} | null>(null);

  // Simulate new bids every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Get a random auction
      const randomAuction = auctions[Math.floor(Math.random() * auctions.length)];
      if (!randomAuction.bids.length) return;
      
      // Get the latest bid from this auction
      const latestBid = randomAuction.bids[randomAuction.bids.length - 1];
      
      // Update state with the latest bid info
      setLatestBid({
        auction: randomAuction,
        bid: latestBid
      });
      
      // Show toast notification
      toast({
        title: "New Bid Placed!",
        description: `${latestBid.userName} bid $${latestBid.amount} on ${randomAuction.title}`,
        duration: 5000,
      });
    }, 30000); // Every 30 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  return null; // This component doesn't render anything, it just shows toasts
};

export default BidNotification;
