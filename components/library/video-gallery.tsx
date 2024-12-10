"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Heart, Trash2, FolderPlus, X, Play } from "lucide-react";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  date: string;
  duration: string;
}

const videos: Video[] = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    title: "Mountain Adventure",
    date: "10:14 AM, 07 Nov 24",
    duration: "2:30"
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1682687221038-404670f01d03",
    title: "Ocean Waves",
    date: "12:10 AM, 06 Nov 24",
    duration: "1:45"
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    title: "Forest Walk",
    date: "09:30 AM, 05 Nov 24",
    duration: "3:15"
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    title: "Lake View",
    date: "03:45 PM, 04 Nov 24",
    duration: "2:00"
  }
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card 
            key={video.id}
            className="group relative overflow-hidden cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <div className="aspect-video relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-12 h-12 text-white opacity-75 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-medium truncate">{video.title}</p>
                <p className="text-xs opacity-75">{video.date}</p>
                <span className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded text-xs">
                  {video.duration}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          <DialogTitle className="sr-only">
            {selectedVideo?.title}
          </DialogTitle>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-black/20"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
            
            <div className="aspect-video bg-black relative">
              <img
                src={selectedVideo?.thumbnail}
                alt={selectedVideo?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-16 h-16 text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <h3 className="font-medium">{selectedVideo?.title}</h3>
                  <p className="text-sm opacity-75">{selectedVideo?.date}</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Like video</span>
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
                    <span className="sr-only">Delete video</span>
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