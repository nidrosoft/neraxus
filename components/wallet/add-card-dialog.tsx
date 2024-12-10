"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

interface AddCardDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddCardDialog({ isOpen, onClose }: AddCardDialogProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Card added successfully!",
      description: "Your new card has been saved and is ready to use.",
      className: "bg-gradient-to-r from-purple-600 to-pink-600 text-white",
    });
    
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Enter Payment Details</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="email@example.com"
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Card Information</label>
            <Input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full"
              required
              maxLength={19}
              pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Expire Date</label>
              <Input
                type="text"
                placeholder="MM/YY"
                className="w-full"
                required
                maxLength={5}
                pattern="\d{2}/\d{2}"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">CVC</label>
              <Input
                type="text"
                placeholder="123"
                className="w-full"
                required
                maxLength={3}
                pattern="\d{3}"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Cardholder Name</label>
            <Input
              type="text"
              placeholder="Full name on card"
              className="w-full"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Country or Region</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Card"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            By saving your payment information, you allow Neraxus to charge
            you for future payments in accordance with their terms.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}