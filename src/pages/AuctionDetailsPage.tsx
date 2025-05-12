
import React from 'react';
import { useParams } from 'react-router-dom';
import AuctionDetails from '@/components/AuctionDetails';

const AuctionDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return <AuctionDetails auctionId={id} />;
};

export default AuctionDetailsPage;
