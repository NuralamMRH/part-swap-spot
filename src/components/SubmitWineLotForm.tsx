
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/hooks/use-toast';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const wineCategories = [
  { value: "Red Wine", label: "Red Wine" },
  { value: "White Wine", label: "White Wine" },
  { value: "Sparkling", label: "Sparkling" },
  { value: "Rosé", label: "Rosé" },
  { value: "Dessert Wine", label: "Dessert Wine" },
];

const wineConditions = [
  { value: "New", label: "New" },
  { value: "Aged - Excellent", label: "Aged - Excellent" },
  { value: "Aged - Good", label: "Aged - Good" },
  { value: "Aged - Fair", label: "Aged - Fair" },
];

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  category: z.string({
    required_error: "Please select a wine category.",
  }),
  condition: z.string({
    required_error: "Please select the condition.",
  }),
  winery: z.string().min(2, {
    message: "Winery name must be at least 2 characters.",
  }),
  vintage: z.string().refine(
    (val) => {
      const year = parseInt(val);
      return !isNaN(year) && year >= 1900 && year <= new Date().getFullYear();
    },
    {
      message: "Please enter a valid vintage year.",
    }
  ),
  region: z.string().min(2, {
    message: "Region must be at least 2 characters.",
  }),
  grapeVariety: z.string().min(2, {
    message: "Grape variety must be at least 2 characters.",
  }),
  bottleSize: z.string().min(2, {
    message: "Bottle size must be at least 2 characters.",
  }),
  alcoholContent: z.string().optional(),
  lotSize: z.string().refine(
    (val) => {
      const size = parseInt(val);
      return !isNaN(size) && size >= 1 && size <= 100;
    },
    {
      message: "Lot size must be between 1 and 100 bottles.",
    }
  ),
  startingPrice: z.string().refine(
    (val) => {
      const price = parseFloat(val);
      return !isNaN(price) && price > 0;
    },
    {
      message: "Starting price must be greater than 0.",
    }
  ),
  buyNowPrice: z.string().optional().refine(
    (val) => {
      if (!val) return true;
      const price = parseFloat(val);
      return !isNaN(price) && price > 0;
    },
    {
      message: "Buy now price must be greater than 0.",
    }
  ),
  auctionDuration: z.string({
    required_error: "Please select auction duration.",
  }),
});

const SubmitWineLotForm: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      condition: "",
      winery: "",
      vintage: "",
      region: "",
      grapeVariety: "",
      bottleSize: "750ml",
      alcoholContent: "",
      lotSize: "1",
      startingPrice: "",
      buyNowPrice: "",
      auctionDuration: "7",
    },
  });
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files);
      setImages(prev => [...prev, ...newImages]);
      
      // Create URLs for image previews
      const newUrls = newImages.map(file => URL.createObjectURL(file));
      setImageUrls(prev => [...prev, ...newUrls]);
    }
  };
  
  const removeImage = (index: number) => {
    setImageUrls(urls => urls.filter((_, i) => i !== index));
    setImages(imgs => imgs.filter((_, i) => i !== index));
  };
  
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (images.length === 0) {
      toast({
        title: "Error",
        description: "Please upload at least one image of your wine",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Wine lot submitted!",
        description: "Your wine lot has been successfully submitted for auction.",
      });
      form.reset();
      setImages([]);
      setImageUrls([]);
    }, 1500);
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 2015 Château Margaux Bordeaux, 6-Bottle Lot" {...field} />
                  </FormControl>
                  <FormDescription>
                    A clear title including vintage, winery and lot size if applicable
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your wine in detail, including tasting notes, storage conditions, and any unique characteristics" 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {wineCategories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="condition"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Condition</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {wineConditions.map((condition) => (
                          <SelectItem key={condition.value} value={condition.value}>
                            {condition.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="winery"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Winery</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Château Margaux" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="vintage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vintage Year</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 2015" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Region</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Bordeaux" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="grapeVariety"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Grape Variety</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Cabernet Sauvignon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="bottleSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bottle Size</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 750ml" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="alcoholContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alcohol Content</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 13.5%" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="lotSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lot Size (bottles)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="100" {...field} />
                    </FormControl>
                    <FormDescription>
                      Number of bottles in this lot
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="auctionDuration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Auction Duration</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="3">3 days</SelectItem>
                        <SelectItem value="5">5 days</SelectItem>
                        <SelectItem value="7">7 days</SelectItem>
                        <SelectItem value="10">10 days</SelectItem>
                        <SelectItem value="14">14 days</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="startingPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Starting Price ($)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="buyNowPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buy Now Price ($) (Optional)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div>
              <FormLabel>Images</FormLabel>
              <div className="mt-2">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">High quality images of your wine (Max 5 images)</p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      disabled={imageUrls.length >= 5}
                    />
                  </label>
                </div>
                
                {imageUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {imageUrls.map((url, index) => (
                      <div key={index} className="relative">
                        <img
                          src={url}
                          alt={`Wine preview ${index + 1}`}
                          className="w-full h-20 object-cover rounded-md"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                          aria-label="Remove image"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3">
          <Button variant="outline" type="button">Cancel</Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Wine Lot"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SubmitWineLotForm;
