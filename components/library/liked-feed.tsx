"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface LikedItem {
  id: string;
  type: "image" | "video" | "article";
  title: string;
  preview: string;
  likes: number;
  comments: number;
  date: string;
}

const likedItems: LikedItem[] = [
  {
    id: "1",
    type: "image",
    title: "Mountain Landscape",
    preview: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    likes: 245,
    comments: 12,
    date: "2 hours ago"
  },
  {
    id: "2",
    type: "video",
    title: "Ocean Waves",
    preview: "https://images.unsplash.com/photo-1682687221038-404670f01d03",
    likes: 189,
    comments: 8,
    date: "4 hours ago"
  }
];

export function LikedFeed() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {likedItems.map((item) => (
        <Card key={item.id} className="overflow-hidden group">
          <div className="aspect-square relative">
            <img
              src={item.preview}
              alt={item.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
              <h3 className="font-medium text-sm mb-1">{item.title}</h3>
              <div className="flex items-center space-x-3 text-xs">
                <span className="flex items-center">
                  <Heart className="h-3 w-3 mr-1" />
                  {item.likes}
                </span>
                <span className="flex items-center">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  {item.comments}
                </span>
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}