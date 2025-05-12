
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  rating?: number;
  isVerified?: boolean;
}

export interface Bid {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  timestamp: Date;
}

export interface Auction {
  id: string;
  title: string;
  description: string;
  category: 'Cars' | 'Trucks' | 'Motorcycles' | 'Heavy Equipment' | 'Other';
  condition: 'New' | 'Used - Like New' | 'Used - Good' | 'Used - Fair';
  sellerId: string;
  sellerName: string;
  sellerRating?: number;
  images: string[];
  startingPrice: number;
  currentBid?: number;
  buyNowPrice?: number;
  bids: Bid[];
  endTime: Date;
  startTime: Date;
  location: string;
  brand?: string;
  model?: string;
  year?: number;
  isActive: boolean;
  views?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  imageUrl: string;
}
