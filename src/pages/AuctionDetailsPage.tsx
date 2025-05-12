
import React from 'react';
import { useParams } from 'react-router-dom';
import AuctionDetails from '@/components/AuctionDetails';

const AuctionDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Pass the ID directly to the component rather than as a prop named auctionId
  return <AuctionDetails />;
};

export default AuctionDetailsPage;
