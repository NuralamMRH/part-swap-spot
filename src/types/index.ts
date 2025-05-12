
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
  category: 'Red Wine' | 'White Wine' | 'Sparkling' | 'Rosé' | 'Dessert Wine';
  condition: 'New' | 'Aged - Excellent' | 'Aged - Good' | 'Aged - Fair';
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
  // Wine-specific properties
  winery?: string;
  vintage?: number;
  region?: string;
  grapeVariety?: string;
  bottleSize?: string;
  alcoholContent?: string;
  lotSize?: number; // Number of bottles in the lot
  tasteProfile?: string;
  acidity?: string;
  body?: string;
  finish?: string;
  pairingRecommendations?: string[];
  storageConditions?: string;
  awards?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  imageUrl: string;
}

export interface WineFilters {
  category?: string;
  vintage?: number;
  minPrice?: number;
  maxPrice?: number;
  region?: string;
  winery?: string;
  grapeVariety?: string;
}

export interface LotInfo {
  auctionId: string;
  lotNumber: number;
  totalBottles: number;
  bottlesSeparately: boolean;
  minimumBid?: number;
}
