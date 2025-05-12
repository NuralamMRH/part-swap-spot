
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { Slider } from "@/components/ui/slider";
import { Label } from '@/components/ui/label';
import { WineFilters } from '@/types';
import { Search, Filter } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (query: string, filters: WineFilters) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<WineFilters>({});
  const [priceRange, setPriceRange] = useState([0, 10000]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert price range to min/max values
    const filtersWithPrice = {
      ...filters,
      minPrice: priceRange[0],
      maxPrice: priceRange[1]
    };
    
    onSearch(query, filtersWithPrice);
  };
  
  const updateFilter = (key: keyof WineFilters, value: any) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const resetFilters = () => {
    setFilters({});
    setPriceRange([0, 10000]);
  };
  
  return (
    <div className="mb-8">
      <form onSubmit={handleSearchSubmit}>
        <div className="flex gap-2 mb-4">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search for wines..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <Button type="button" variant="outline" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Filters</span>
          </Button>
          <Button type="submit">Search</Button>
        </div>
        
        {showFilters && (
          <div className="bg-white p-4 rounded-md shadow-md mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div>
                <Label htmlFor="category" className="mb-2 block">Category</Label>
                <Select value={filters.category || ''} onValueChange={(value) => updateFilter('category', value)}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="Red Wine">Red Wine</SelectItem>
                    <SelectItem value="White Wine">White Wine</SelectItem>
                    <SelectItem value="Sparkling">Sparkling</SelectItem>
                    <SelectItem value="Rosé">Rosé</SelectItem>
                    <SelectItem value="Dessert Wine">Dessert Wine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="vintage" className="mb-2 block">Vintage</Label>
                <Select value={filters.vintage?.toString() || ''} onValueChange={(value) => updateFilter('vintage', value ? parseInt(value) : undefined)}>
                  <SelectTrigger id="vintage">
                    <SelectValue placeholder="Any Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any Year</SelectItem>
                    {Array.from({ length: 30 }, (_, i) => {
                      const year = 2023 - i;
                      return (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="region" className="mb-2 block">Region</Label>
                <Select value={filters.region || ''} onValueChange={(value) => updateFilter('region', value)}>
                  <SelectTrigger id="region">
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Regions</SelectItem>
                    <SelectItem value="Bordeaux">Bordeaux</SelectItem>
                    <SelectItem value="Burgundy">Burgundy</SelectItem>
                    <SelectItem value="Tuscany">Tuscany</SelectItem>
                    <SelectItem value="Napa Valley">Napa Valley</SelectItem>
                    <SelectItem value="Rioja">Rioja</SelectItem>
                    <SelectItem value="Champagne">Champagne</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="grapeVariety" className="mb-2 block">Grape Variety</Label>
                <Select value={filters.grapeVariety || ''} onValueChange={(value) => updateFilter('grapeVariety', value)}>
                  <SelectTrigger id="grapeVariety">
                    <SelectValue placeholder="All Varieties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Varieties</SelectItem>
                    <SelectItem value="Cabernet Sauvignon">Cabernet Sauvignon</SelectItem>
                    <SelectItem value="Merlot">Merlot</SelectItem>
                    <SelectItem value="Pinot Noir">Pinot Noir</SelectItem>
                    <SelectItem value="Chardonnay">Chardonnay</SelectItem>
                    <SelectItem value="Sauvignon Blanc">Sauvignon Blanc</SelectItem>
                    <SelectItem value="Syrah">Syrah</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label className="mb-2 block">Price Range: ${priceRange[0]} - ${priceRange[1]}</Label>
              <Slider
                defaultValue={[0, 10000]}
                value={priceRange}
                max={10000}
                step={100}
                onValueChange={setPriceRange}
                className="mb-6"
              />
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="advanced">
                <AccordionTrigger>Advanced Filters</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                    <div>
                      <Label htmlFor="winery" className="mb-2 block">Winery</Label>
                      <Select value={filters.winery || ''} onValueChange={(value) => updateFilter('winery', value)}>
                        <SelectTrigger id="winery">
                          <SelectValue placeholder="All Wineries" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All Wineries</SelectItem>
                          <SelectItem value="Château Margaux">Château Margaux</SelectItem>
                          <SelectItem value="Domaine de la Romanée-Conti">Domaine de la Romanée-Conti</SelectItem>
                          <SelectItem value="Opus One">Opus One</SelectItem>
                          <SelectItem value="Penfolds">Penfolds</SelectItem>
                          <SelectItem value="Antinori">Antinori</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="flex justify-end mt-4">
              <Button type="button" variant="outline" onClick={resetFilters} className="mr-2">
                Reset
              </Button>
              <Button type="submit">Apply Filters</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchFilters;
