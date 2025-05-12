
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Search, 
  Menu, 
  X, 
  User, 
  LogIn, 
  Package, 
  Heart, 
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { currentUser } from '@/data/mock';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle this for demo purposes
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-auction-primary">
            <span>Auto</span>
            <span className="text-auction-secondary">Bid</span>
          </div>
        </Link>
        
        {/* Search on desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search parts..." 
              className="pl-10 w-full" 
            />
          </div>
        </div>
        
        {/* Navigation links - desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/categories" className="text-gray-600 hover:text-auction-primary transition">
            Categories
          </Link>
          <Link to="/sell" className="text-gray-600 hover:text-auction-primary transition">
            Sell
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-auction-primary transition">
            How It Works
          </Link>
          
          {/* User menu */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5 text-gray-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <div className="p-4">
                    <h3 className="font-medium text-sm">Notifications</h3>
                  </div>
                  <DropdownMenuSeparator />
                  <div className="p-4 text-sm text-center text-gray-500">
                    No new notifications
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full" size="icon">
                    <Avatar>
                      <AvatarImage src={currentUser.profileImage} alt={currentUser.name} />
                      <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-0.5">
                      <p className="text-sm font-medium">{currentUser.name}</p>
                      <p className="text-xs text-gray-500">{currentUser.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer flex w-full items-center">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-bids" className="cursor-pointer flex w-full items-center">
                      <Heart className="mr-2 h-4 w-4" />
                      <span>My Bids</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-listings" className="cursor-pointer flex w-full items-center">
                      <Package className="mr-2 h-4 w-4" />
                      <span>My Listings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/messages" className="cursor-pointer flex w-full items-center">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      <span>Messages</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLoginToggle} className="cursor-pointer">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={handleLoginToggle}>
                Log In
              </Button>
              <Button onClick={handleLoginToggle}>
                Sign Up
              </Button>
            </div>
          )}
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input type="text" placeholder="Search parts..." className="pl-10 w-full" />
            </div>
            
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/categories" 
                className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/sell" 
                className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
              <Link 
                to="/how-it-works" 
                className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              
              {isLoggedIn ? (
                <>
                  <div className="border-t border-gray-200 my-2 pt-2">
                    <Link 
                      to="/dashboard" 
                      className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="mr-3 h-4 w-4" />
                      <span>My Dashboard</span>
                    </Link>
                    <Link 
                      to="/my-bids" 
                      className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Heart className="mr-3 h-4 w-4" />
                      <span>My Bids</span>
                    </Link>
                    <Link 
                      to="/my-listings" 
                      className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Package className="mr-3 h-4 w-4" />
                      <span>My Listings</span>
                    </Link>
                    <Link 
                      to="/messages" 
                      className="px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 flex items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <MessageCircle className="mr-3 h-4 w-4" />
                      <span>Messages</span>
                    </Link>
                    <button 
                      onClick={() => {
                        handleLoginToggle();
                        setIsMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-gray-600 rounded-md hover:bg-gray-100 flex items-center"
                    >
                      <LogIn className="mr-3 h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="border-t border-gray-200 my-2 pt-2 space-y-3">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      handleLoginToggle();
                      setIsMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Log In
                  </Button>
                  <Button 
                    onClick={() => {
                      handleLoginToggle();
                      setIsMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
