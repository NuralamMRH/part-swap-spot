
import React, { useState } from 'react';
import { 
  Filter, 
  Search, 
  SlidersHorizontal,
  ChevronDown,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import AuctionCard from '@/components/AuctionCard';
import { auctions } from '@/data/mock';
import { useIsMobile } from '@/hooks/use-mobile';

const BRANDS = [
  "BMW", "Toyota", "Ford", "Chevrolet", "Honda", 
  "Audi", "Mercedes", "Volkswagen", "Nissan", "Hyundai"
];

const CONDITIONS = [
  "New", "Used - Like New", "Used - Good", "Used - Fair"
];

const AuctionsPage: React.FC = () => {
  const isMobile = useIsMobile();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('ending-soon');
  const [filtersVisible, setFiltersVisible] = useState(!isMobile);
  
  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };
  
  const toggleCondition = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };
  
  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedConditions([]);
    setPriceRange([0, 10000]);
  };
  
  const filteredAuctions = auctions.filter(auction => {
    // Apply search filter
    if (searchQuery && !auction.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0 && auction.brand && !selectedBrands.includes(auction.brand)) {
      return false;
    }
    
    // Apply condition filter
    if (selectedConditions.length > 0 && !selectedConditions.includes(auction.condition)) {
      return false;
    }
    
    // Apply price filter
    if (auction.currentBid && (auction.currentBid < priceRange[0] || auction.currentBid > priceRange[1])) {
      return false;
    }
    
    return true;
  });
  
  // Sort auctions
  const sortedAuctions = [...filteredAuctions].sort((a, b) => {
    switch (sortBy) {
      case 'ending-soon':
        return new Date(a.endTime).getTime() - new Date(b.endTime).getTime();
      case 'price-low':
        return (a.currentBid || 0) - (b.currentBid || 0);
      case 'price-high':
        return (b.currentBid || 0) - (a.currentBid || 0);
      case 'recently-added':
        return new Date(b.startTime).getTime() - new Date(a.startTime).getTime();
      default:
        return 0;
    }
  });
  
  const FilterPanel = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="px-1">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={10000}
            step={100}
            onValueChange={setPriceRange}
            className="mb-4"
          />
          <div className="flex items-center justify-between">
            <span className="text-sm">${priceRange[0]}</span>
            <span className="text-sm">${priceRange[1]}+</span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <Accordion type="multiple" defaultValue={['brands', 'condition']}>
        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {BRANDS.map(brand => (
                <div key={brand} className="flex items-center">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <label htmlFor={`brand-${brand}`} className="ml-2 text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="condition">
          <AccordionTrigger>Condition</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {CONDITIONS.map(condition => (
                <div key={condition} className="flex items-center">
                  <Checkbox
                    id={`condition-${condition}`}
                    checked={selectedConditions.includes(condition)}
                    onCheckedChange={() => toggleCondition(condition)}
                  />
                  <label htmlFor={`condition-${condition}`} className="ml-2 text-sm cursor-pointer">
                    {condition}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Separator />
      
      <Button 
        variant="outline" 
        className="w-full border-dashed"
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold">All Auctions</h1>
          <p className="text-gray-500 mt-1">
            Browse and bid on quality car parts
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search auctions..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          
          {isMobile ? (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                  <span className="sr-only">Filter</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Filters</DrawerTitle>
                  <DrawerDescription>
                    Narrow down your search results
                  </DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-2">
                  <FilterPanel />
                </div>
                <DrawerFooter>
                  <Button onClick={() => setFiltersVisible(false)}>Apply Filters</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ) : (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              {filtersVisible ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
              <span className="sr-only">{filtersVisible ? "Hide filters" : "Show filters"}</span>
            </Button>
          )}
        </div>
      </div>
      
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        {/* Filters sidebar */}
        {filtersVisible && !isMobile && (
          <div className="lg:w-64 flex-shrink-0 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-medium flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </h2>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearFilters}
                className="h-auto py-1 px-2 text-xs"
              >
                Clear all
              </Button>
            </div>
            
            <FilterPanel />
          </div>
        )}
        
        {/* Auction listings */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
              {selectedBrands.map(brand => (
                <Badge 
                  key={brand} 
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {brand}
                  <button onClick={() => toggleBrand(brand)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              
              {selectedConditions.map(condition => (
                <Badge 
                  key={condition} 
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {condition}
                  <button onClick={() => toggleCondition(condition)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
              
              {(priceRange[0] > 0 || priceRange[1] < 10000) && (
                <Badge 
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  ${priceRange[0]} - ${priceRange[1]}
                  <button onClick={() => setPriceRange([0, 10000])}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
            
            <div className="w-full sm:w-auto">
              <Select defaultValue={sortBy} onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <div className="flex items-center">
                    <ChevronDown className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="recently-added">Recently Added</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {sortedAuctions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedAuctions.map(auction => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border rounded-lg">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;
