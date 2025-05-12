
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
    name: "Red Wine",
    slug: "red-wine",
    count: 1245,
    imageUrl: "https://static.millesima.com/s3/attachements/editorial/h630px/red-wine-types.jpg"
  },
  {
    id: "cat2",
    name: "White Wine",
    slug: "white-wine",
    count: 422,
    imageUrl: "https://www.perfectcellar.com/cdn/shop/articles/Fine_Wine_and_Regular_Wine.jpg?v=1643119025"
  },
  {
    id: "cat3",
    name: "Sparkling",
    slug: "sparkling",
    count: 637,
    imageUrl: "https://static.millesima.com/s3/attachements/editorial/h630px/how-many-ounces-in-a-glass-of-wine.jpg"
  },
  {
    id: "cat4",
    name: "Rosé",
    slug: "rose",
    count: 185,
    imageUrl: "https://usualwines.com/cdn/shop/articles/image2_da42c85b-f132-4f6d-a7ae-df9c0fae3e91.jpg?v=1616121779"
  },
  {
    id: "cat5",
    name: "Dessert Wine",
    slug: "dessert-wine",
    count: 512,
    imageUrl: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-08/Red%20wine.jpg"
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
    title: "Premium 2015 Bordeaux Red Wine Collection",
    description: "Complete collection of 2015 Bordeaux red wines. Perfect for collectors or special occasions. Limited edition with original packaging and certificates of authenticity.",
    category: "Red Wine",
    condition: "New",
    sellerId: "seller1",
    sellerName: "Premium Wine Estates",
    sellerRating: 4.9,
    images: [
      "https://plus.unsplash.com/premium_photo-1682097091093-dd18b37764a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://static.millesima.com/s3/attachements/editorial/h630px/red-wine-types.jpg"
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
    location: "Bordeaux, France",
    brand: "Various Premium Bordeaux",
    year: 2015,
    isActive: true,
    views: 342
  },
  {
    id: "a2",
    title: "Vintage Champagne Selection - Dom Perignon",
    description: "Exclusive selection of vintage Dom Perignon champagne. Perfect for celebrations and special occasions. Original cases with all documentation included.",
    category: "Sparkling",
    condition: "New",
    sellerId: "seller2",
    sellerName: "Luxury Wine Imports",
    sellerRating: 4.7,
    images: [
      "https://img.freepik.com/free-photo/vertical-shot-person-holding-glass-wine-vineyard-sunlight_181624-31406.jpg?semt=ais_hybrid&w=740",
      "https://static.millesima.com/s3/attachements/editorial/h630px/how-many-ounces-in-a-glass-of-wine.jpg"
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
    location: "Paris, France",
    brand: "Dom Perignon",
    year: 2010,
    isActive: true,
    views: 189
  },
  {
    id: "a3",
    title: "Napa Valley Premium Cabernet Collection",
    description: "Complete collection of premium Napa Valley Cabernet Sauvignon from top vineyards. Perfect for collectors and enthusiasts looking for exceptional quality.",
    category: "Red Wine",
    condition: "New",
    sellerId: "seller3",
    sellerName: "Napa Wine Cellars",
    sellerRating: 5.0,
    images: [
      "https://www.perfectcellar.com/cdn/shop/articles/Fine_Wine_and_Regular_Wine.jpg?v=1643119025",
      "https://media.istockphoto.com/id/1124920033/photo/variety-of-wine-in-crates-at-retail-shop.jpg?s=612x612&w=0&k=20&c=m5I85zFOmFtK297ZXyl1VEp685FPot_8f9gVp_ka-s8="
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
    location: "Napa Valley, USA",
    brand: "Various Napa Valley",
    year: 2018,
    isActive: true,
    views: 412
  },
  {
    id: "a4",
    title: "Vintage Italian Barolo Collection - Limited Release",
    description: "Rare collection of vintage Barolo wines from prestigious Italian estates. Perfect for collectors and connoisseurs seeking exceptional quality.",
    category: "Red Wine",
    condition: "New",
    sellerId: "seller4",
    sellerName: "Italian Wine Imports",
    sellerRating: 4.6,
    images: [
      "https://twineliving.com/cdn/shop/files/fjavjzzyrev6spnl3oxr.jpg?v=1740586918&width=1080",
      "https://www.thewanderingpalate.com/wp-content/uploads/grape-wall-of-china-wine-tasting-shanghai-bordeaux.jpg"
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
    location: "Piedmont, Italy",
    brand: "Various Barolo",
    year: 2010,
    isActive: true,
    views: 156
  },
  {
    id: "a5",
    title: "Premium New Zealand Sauvignon Blanc Collection",
    description: "Complete collection of New Zealand's finest Sauvignon Blanc wines. Perfect for white wine enthusiasts looking for exceptional quality and flavor profiles.",
    category: "White Wine",
    condition: "New",
    sellerId: "seller5",
    sellerName: "Southern Hemisphere Wines",
    sellerRating: 4.8,
    images: [
      "https://static.millesima.com/s3/attachements/editorial/h630px/how-many-ounces-in-a-glass-of-wine.jpg",
      "https://usualwines.com/cdn/shop/articles/image2_da42c85b-f132-4f6d-a7ae-df9c0fae3e91.jpg?v=1616121779"
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
    location: "Marlborough, New Zealand",
    brand: "Various NZ Estates",
    year: 2021,
    isActive: true,
    views: 278
  },
  {
    id: "a6",
    title: "Vintage Port Wine Collection - 1980s Selection",
    description: "Rare collection of vintage Port wines from the 1980s. Perfect for collectors and connoisseurs of fine dessert wines with exceptional aging potential.",
    category: "Dessert Wine",
    condition: "Aged - Excellent",
    sellerId: "seller6",
    sellerName: "Vintage Wine Cellar",
    sellerRating: 4.9,
    images: [
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2024-08/Red%20wine.jpg",
      "https://media.istockphoto.com/id/1124920033/photo/variety-of-wine-in-crates-at-retail-shop.jpg?s=612x612&w=0&k=20&c=m5I85zFOmFtK297ZXyl1VEp685FPot_8f9gVp_ka-s8="
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
    location: "Porto, Portugal",
    brand: "Various Port Houses",
    year: 1985,
    isActive: true,
    views: 321
  }
];

