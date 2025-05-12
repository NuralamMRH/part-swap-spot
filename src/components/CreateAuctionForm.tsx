
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Upload, XCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CreateAuctionForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setSelectedImages([...selectedImages, ...newImages]);
    }
  };
  
  const removeImage = (index: number) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Auction created successfully!",
        description: "Your listing has been submitted and is now live.",
      });
      
      // Navigate to the newly created auction
      // For demo purposes, we'll just go back to step 1
      setCurrentStep(1);
      setSelectedImages([]);
    }, 2000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Create a New Auction</h1>
      
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 1 ? 'bg-auction-primary text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              1
            </div>
            <span className="text-sm mt-1">Details</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${
            currentStep >= 2 ? 'bg-auction-primary' : 'bg-gray-200'
          }`} />
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 2 ? 'bg-auction-primary text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              2
            </div>
            <span className="text-sm mt-1">Images</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${
            currentStep >= 3 ? 'bg-auction-primary' : 'bg-gray-200'
          }`} />
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 3 ? 'bg-auction-primary text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              3
            </div>
            <span className="text-sm mt-1">Pricing</span>
          </div>
          <div className={`h-1 flex-1 mx-2 ${
            currentStep >= 4 ? 'bg-auction-primary' : 'bg-gray-200'
          }`} />
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= 4 ? 'bg-auction-primary text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              4
            </div>
            <span className="text-sm mt-1">Review</span>
          </div>
        </div>
      </div>
      
      {/* Step 1: Item Details */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Item Details</CardTitle>
            <CardDescription>
              Please provide detailed information about your item to attract more bidders.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                placeholder="e.g. BMW M3 E46 Engine Complete with Gearbox"
              />
              <p className="text-xs text-gray-500">
                Be specific and include brand, model, and condition in the title.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="cars">
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cars">Cars</SelectItem>
                  <SelectItem value="trucks">Trucks</SelectItem>
                  <SelectItem value="motorcycles">Motorcycles</SelectItem>
                  <SelectItem value="heavy-equipment">Heavy Equipment</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="condition">Condition</Label>
              <Select defaultValue="used-good">
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used-like-new">Used - Like New</SelectItem>
                  <SelectItem value="used-good">Used - Good</SelectItem>
                  <SelectItem value="used-fair">Used - Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" placeholder="e.g. BMW" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="model">Model</Label>
                <Input id="model" placeholder="e.g. M3 E46" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input id="year" placeholder="e.g. 2005" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. Munich, Germany" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your item in detail..."
                rows={6}
              />
              <p className="text-xs text-gray-500">
                Include specifics like dimensions, compatibility, history, and any defects.
              </p>
            </div>
          </CardContent>
          <CardFooter className="justify-end">
            <Button onClick={handleNextStep}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Step 2: Upload Images */}
      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Upload Images</CardTitle>
            <CardDescription>
              Add high-quality images of your item. You can upload up to 10 images.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                htmlFor="images"
                className="flex flex-col items-center justify-center gap-2 cursor-pointer"
              >
                <Upload className="h-10 w-10 text-gray-400" />
                <h3 className="text-lg font-medium">Drag & drop files here</h3>
                <p className="text-sm text-gray-500">or click to browse</p>
              </label>
            </div>
            
            {/* Preview images */}
            {selectedImages.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Selected Images:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {selectedImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={image} 
                        alt={`Preview ${index + 1}`} 
                        className="w-full h-24 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-white rounded-full shadow"
                      >
                        <XCircle className="h-5 w-5 text-auction-secondary" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-4 text-xs text-gray-500">
              <p>
                <strong>Tips for great photos:</strong>
              </p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Ensure good lighting and focus</li>
                <li>Show the item from multiple angles</li>
                <li>Include close-ups of any defects or damage</li>
                <li>Provide scale reference when possible</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
            <Button onClick={handleNextStep} disabled={selectedImages.length === 0}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Step 3: Pricing */}
      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Set Your Pricing</CardTitle>
            <CardDescription>
              Choose your starting price and auction settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="startingPrice">Starting Price ($)</Label>
              <Input 
                id="startingPrice" 
                type="number"
                placeholder="e.g. 100"
              />
              <p className="text-xs text-gray-500">
                This is the minimum amount bidding will start at.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="buyNowPrice">Buy Now Price ($) (Optional)</Label>
              <Input 
                id="buyNowPrice" 
                type="number"
                placeholder="e.g. 500"
              />
              <p className="text-xs text-gray-500">
                Bidders can choose to purchase immediately at this price.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reservePrice">Reserve Price ($) (Optional)</Label>
              <Input 
                id="reservePrice" 
                type="number"
                placeholder="e.g. 200"
              />
              <p className="text-xs text-gray-500">
                Your item will not sell unless bidding reaches this amount.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="duration">Auction Duration</Label>
              <Select defaultValue="7days">
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3days">3 Days</SelectItem>
                  <SelectItem value="5days">5 Days</SelectItem>
                  <SelectItem value="7days">7 Days</SelectItem>
                  <SelectItem value="10days">10 Days</SelectItem>
                  <SelectItem value="14days">14 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="shipping">Shipping Options</Label>
              <Select defaultValue="worldwide">
                <SelectTrigger>
                  <SelectValue placeholder="Select shipping options" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local Pickup Only</SelectItem>
                  <SelectItem value="domestic">Domestic Shipping</SelectItem>
                  <SelectItem value="worldwide">Worldwide Shipping</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
            <Button onClick={handleNextStep}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}
      
      {/* Step 4: Review & Submit */}
      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Review & Submit</CardTitle>
            <CardDescription>
              Please review your listing details before submitting.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 font-medium border-b">
                  Item Details
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Title:</span>
                    <span>BMW M3 E46 Engine Complete with Gearbox</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Category:</span>
                    <span>Cars</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Condition:</span>
                    <span>Used - Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Brand:</span>
                    <span>BMW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Model:</span>
                    <span>M3 E46</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Year:</span>
                    <span>2005</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span>Munich, Germany</span>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 font-medium border-b">
                  Images
                </div>
                <div className="p-4">
                  {selectedImages.length > 0 ? (
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {selectedImages.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`Preview ${index + 1}`} 
                          className="w-full h-16 object-cover rounded-md"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-gray-500">No images uploaded.</div>
                  )}
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 font-medium border-b">
                  Pricing & Duration
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Starting Price:</span>
                    <span>$4,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Buy Now Price:</span>
                    <span>$8,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Reserve Price:</span>
                    <span>$5,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration:</span>
                    <span>7 Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Shipping:</span>
                    <span>Worldwide Shipping</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="h-4 w-4 rounded border-gray-300 text-auction-primary focus:ring-auction-primary"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <a href="#" className="text-auction-primary hover:underline">Terms of Service</a> and <a href="#" className="text-auction-primary hover:underline">Auction Policies</a>.
                </label>
              </div>
              
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" onClick={handlePrevStep}>
              Back
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Creating Auction..." : "Submit Listing"}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default CreateAuctionForm;
