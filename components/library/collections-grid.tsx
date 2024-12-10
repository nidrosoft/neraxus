"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderPlus, Image as ImageIcon, Video, FileText } from "lucide-react";

interface Collection {
  id: string;
  name: string;
  preview: string;
  itemCount: {
    images: number;
    videos: number;
    articles: number;
  };
}

const collections: Collection[] = [
  {
    id: "1",
    name: "Landscapes",
    preview: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    itemCount: {
      images: 24,
      videos: 3,
      articles: 5
    }
  },
  {
    id: "2",
    name: "Ocean & Beaches",
    preview: "https://images.unsplash.com/photo-1682687221038-404670f01d03",
    itemCount: {
      images: 18,
      videos: 2,
      articles: 7
    }
  }
];

export function CollectionsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card className="p-4 border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer hover:border-purple-500 transition-colors">
        <FolderPlus className="h-8 w-8 text-purple-500 mb-2" />
        <h3 className="font-medium">Create Collection</h3>
        <p className="text-sm text-muted-foreground">Organize your content</p>
      </Card>

      {collections.map((collection) => (
        <Card key={collection.id} className="overflow-hidden group cursor-pointer">
          <div className="aspect-square relative">
            <img
              src={collection.preview}
              alt={collection.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <h3 className="font-medium mb-2">{collection.name}</h3>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                  <ImageIcon className="h-4 w-4 mr-1" />
                  {collection.itemCount.images}
                </span>
                <span className="flex items-center">
                  <Video className="h-4 w-4 mr-1" />
                  {collection.itemCount.videos}
                </span>
                <span className="flex items-center">
                  <FileText className="h-4 w-4 mr-1" />
                  {collection.itemCount.articles}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}