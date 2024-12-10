"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Heart, Trash2, FolderPlus, X } from "lucide-react";

interface Image {
  id: string;
  url: string;
  title: string;
  date: string;
}

const images: Image[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    title: "Mountain Landscape",
    date: "10:14 AM, 07 Nov 24"
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1682687221038-404670f01d03",
    title: "Ocean Sunset",
    date: "12:10 AM, 06 Nov 24"
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Foggy Forest",
    date: "09:30 AM, 05 Nov 24"
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    title: "Alpine Lake",
    date: "03:45 PM, 04 Nov 24"
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Waterfall Valley",
    date: "11:20 AM, 03 Nov 24"
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    title: "Snowy Mountains",
    date: "02:15 PM, 02 Nov 24"
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e",
    title: "Desert Sunset",
    date: "05:40 PM, 01 Nov 24"
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Tropical Paradise",
    date: "08:55 AM, 31 Oct 24"
  }
];

export function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <Card 
            key={image.id}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square relative">
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-medium truncate">{image.title}</p>
                <p className="text-xs opacity-75">{image.date}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-black/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            
            <img
              src={selectedImage?.url}
              alt={selectedImage?.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-medium">{selectedImage?.title}</h3>
                  <p className="text-sm opacity-75">{selectedImage?.date}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Like image</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <FolderPlus className="h-4 w-4" />
                    <span className="sr-only">Add to collection</span>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete image</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}