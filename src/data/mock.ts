
import { Auction, Category, User, Bid } from "../types";

export const currentUser: User = {
  id: "user1",
  name: "John Smith",
  email: "john@example.com",
  profileImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=150&auto=format&fit=crop",
  rating: 4.8,
  isVerified: true
};

export const categories: Category[] = [
  {
    id: "cat1",
    name: "Cars",
    slug: "cars",
    count: 1245,
    imageUrl: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat2",
    name: "Trucks",
    slug: "trucks",
    count: 422,
    imageUrl: "https://images.unsplash.com/photo-1659345766010-f0769343f341?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat3",
    name: "Motorcycles",
    slug: "motorcycles",
    count: 637,
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat4",
    name: "Heavy Equipment",
    slug: "heavy-equipment",
    count: 185,
    imageUrl: "https://images.unsplash.com/photo-1624459294159-d40a90b14daf?q=80&w=500&auto=format&fit=crop"
  },
  {
    id: "cat5",
    name: "Other",
    slug: "other",
    count: 512,
    imageUrl: "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?q=80&w=500&auto=format&fit=crop"
  }
];

// Generate some random past dates for bids
const getPastDate = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

// Generate some random future dates for auction end times
const getFutureDate = (days: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date;
};

export const auctions: Auction[] = [
  {
    id: "a1",
    title: "BMW M3 E46 Engine Complete with Gearbox",
    description: "Complete BMW M3 E46 engine with all accessories and 6-speed manual gearbox. Low mileage, excellent condition. Perfect for restoration projects or replacements.",
    category: "Cars",
    condition: "Used - Good",
    sellerId: "seller1",
    sellerName: "Premium Auto Parts",
    sellerRating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=900&auto=format&fit=crop"
    ],
    startingPrice: 4500,
    currentBid: 5750,
    buyNowPrice: 8000,
    bids: [
      {
        id: "b1",
        userId: "user2",
        userName: "Mike Johnson",
        amount: 4500,
        timestamp: getPastDate(2.5)
      },
      {
        id: "b2",
        userId: "user3",
        userName: "Sarah Williams",
        amount: 5000,
        timestamp: getPastDate(1.5)
      },
      {
        id: "b3",
        userId: "user4",
        userName: "David Brown",
        amount: 5750,
        timestamp: getPastDate(0.5)
      }
    ],
    endTime: getFutureDate(3),
    startTime: getPastDate(5),
    location: "Munich, Germany",
    brand: "BMW",
    model: "M3 E46",
    year: 2005,
    isActive: true,
    views: 342
  },
  {
    id: "a2",
    title: "Toyota Land Cruiser Original Suspension Kit",
    description: "Complete suspension kit for Toyota Land Cruiser. Includes shocks, springs, and all mounting hardware. Perfect for off-road enthusiasts looking to upgrade their rig.",
    category: "Cars",
    condition: "New",
    sellerId: "seller2",
    sellerName: "OffRoad Parts Co.",
    sellerRating: 4.7,
    images: [
      "https://images.unsplash.com/photo-1669211159368-fe1add8c256e?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1669211160096-ebb87c0ff768?q=80&w=900&auto=format&fit=crop"
    ],
    startingPrice: 1200,
    currentBid: 1450,
    buyNowPrice: 2000,
    bids: [
      {
        id: "b4",
        userId: "user5",
        userName: "James Wilson",
        amount: 1200,
        timestamp: getPastDate(3)
      },
      {
        id: "b5",
        userId: "user6",
        userName: "Emma Davis",
        amount: 1450,
        timestamp: getPastDate(1)
      }
    ],
    endTime: getFutureDate(5),
    startTime: getPastDate(4),
    location: "Sydney, Australia",
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2020,
    isActive: true,
    views: 189
  },
  {
    id: "a3",
    title: "Harley Davidson Evo Engine - Rebuilt",
    description: "Completely rebuilt Harley Davidson Evolution engine. Fresh from professional rebuild with 0 miles. All new internals and gaskets. Ready to drop in.",
    category: "Motorcycles",
    condition: "Used - Like New",
    sellerId: "seller3",
    sellerName: "Harley Heaven",
    sellerRating: 5.0,
    images: [
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=900&auto=format&fit=crop"
    ],
    startingPrice: 3000,
    currentBid: 3250,
    buyNowPrice: 4500,
    bids: [
      {
        id: "b6",
        userId: "user7",
        userName: "Robert Martin",
        amount: 3000,
        timestamp: getPastDate(2)
      },
      {
        id: "b7",
        userId: "user8",
        userName: "Jennifer Clark",
        amount: 3250,
        timestamp: getPastDate(0.7)
      }
    ],
    endTime: getFutureDate(2),
    startTime: getPastDate(6),
    location: "Milwaukee, USA",
    brand: "Harley Davidson",
    model: "Evolution",
    year: 2019,
    isActive: true,
    views: 412
  },
  {
    id: "a4",
    title: "Caterpillar Hydraulic Pump - Reconditioned",
    description: "Reconditioned hydraulic pump for Caterpillar excavators and loaders. Professionally tested and certified. 6-month warranty included.",
    category: "Heavy Equipment",
    condition: "Used - Good",
    sellerId: "seller4",
    sellerName: "Heavy Duty Parts",
    sellerRating: 4.6,
    images: [
      "https://images.unsplash.com/photo-1533326012311-ad24b3dc1f30?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533325342868-c40d583b9b59?q=80&w=900&auto=format&fit=crop"
    ],
    startingPrice: 2800,
    currentBid: 3100,
    buyNowPrice: 3800,
    bids: [
      {
        id: "b8",
        userId: "user9",
        userName: "Thomas Anderson",
        amount: 2800,
        timestamp: getPastDate(4)
      },
      {
        id: "b9",
        userId: "user10",
        userName: "Lisa Rodriguez",
        amount: 3100,
        timestamp: getPastDate(2)
      }
    ],
    endTime: getFutureDate(7),
    startTime: getPastDate(7),
    location: "Dubai, UAE",
    brand: "Caterpillar",
    year: 2018,
    isActive: true,
    views: 156
  },
  {
    id: "a5",
    title: "Ford F-150 Complete Front Axle Assembly",
    description: "Complete front axle assembly for Ford F-150 trucks. Fits 2015-2020 models. Perfect condition with all brackets and mounting hardware included.",
    category: "Trucks",
    condition: "Used - Like New",
    sellerId: "seller5",
    sellerName: "Truck Parts Direct",
    sellerRating: 4.8,
    images: [
      "https://images.unsplash.com/photo-1599256879063-3464a8f85ccc?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?q=80&w=900&auto=format&fit=crop"
    ],
    startingPrice: 950,
    currentBid: 1200,
    buyNowPrice: 1600,
    bids: [
      {
        id: "b10",
        userId: "user11",
        userName: "Daniel Smith",
        amount: 950,
        timestamp: getPastDate(3.5)
      },
      {
        id: "b11",
        userId: "user12",
        userName: "Michelle Johnson",
        amount: 1050,
        timestamp: getPastDate(2)
      },
      {
        id: "b12",
        userId: "user13",
        userName: "Kevin Wilson",
        amount: 1200,
        timestamp: getPastDate(1)
      }
    ],
    endTime: getFutureDate(4),
    startTime: getPastDate(5),
    location: "Toronto, Canada",
    brand: "Ford",
    model: "F-150",
    year: 2018,
    isActive: true,
    views: 278
  },
  {
    id: "a6",
    title: "Vintage Volkswagen Beetle Complete Carburetor",
    description: "Original carburetor for classic Volkswagen Beetle. Professionally restored and ready to install. Perfect for classic car restorations.",
    category: "Cars",
    condition: "Used - Good",
    sellerId: "seller6",
    sellerName: "Classic Auto Restoration",
    sellerRating: 4.9,
    images: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=900&auto=format&fit=crop"
    ],
    startingPrice: 400,
    currentBid: 525,
    buyNowPrice: 750,
    bids: [
      {
        id: "b13",
        userId: "user14",
        userName: "Peter Brown",
        amount: 400,
        timestamp: getPastDate(5)
      },
      {
        id: "b14",
        userId: "user15",
        userName: "Nancy Davis",
        amount: 450,
        timestamp: getPastDate(3)
      },
      {
        id: "b15",
        userId: "user16",
        userName: "George Miller",
        amount: 525,
        timestamp: getPastDate(1.5)
      }
    ],
    endTime: getFutureDate(6),
    startTime: getPastDate(8),
    location: "Berlin, Germany",
    brand: "Volkswagen",
    model: "Beetle",
    year: 1965,
    isActive: true,
    views: 321
  }
];
