
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Auction } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface AuctionCardProps {
  auction: Auction;
}

const AuctionCard: React.FC<AuctionCardProps> = ({ auction }) => {
  const timeLeft = formatDistanceToNow(new Date(auction.endTime), { addSuffix: true });
  const isEnding = new Date(auction.endTime).getTime() - Date.now() < 24 * 60 * 60 * 1000;
  
  return (
    <Link 
      to={`/auction/${auction.id}`} 
      className="group block rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={auction.images[0]} 
          alt={auction.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isEnding && (
            <Badge className="bg-auction-secondary hover:bg-auction-secondary/90">
              Ending Soon
            </Badge>
          )}
          <Badge className="bg-gray-800/70 hover:bg-gray-800/80">
            {auction.bids.length} {auction.bids.length === 1 ? 'Bid' : 'Bids'}
          </Badge>
        </div>
      </div>
      
      <div className="p-4 border-t">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg line-clamp-2 group-hover:text-auction-primary transition-colors">
            {auction.title}
          </h3>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="text-auction-primary font-semibold">
            ${auction.currentBid?.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{timeLeft}</span>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{auction.location}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            <span>{auction.views} views</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AuctionCard;
