"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Play, X, ArrowLeft } from "lucide-react";
import { VideoActions } from "./video-actions";

interface VideoResultProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
  duration: string;
  isLoading?: boolean;
  onBack?: () => void;
}

export function VideoResult({ 
  videoUrl, 
  thumbnail, 
  title, 
  duration,
  isLoading = false,
  onBack 
}: VideoResultProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (isLoading) {
    return (
      <Card className="w-full aspect-video bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-4 border-purple-600 border-t-transparent animate-spin" />
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-2 bg-muted-foreground/20 rounded-full w-3/4 animate-pulse" />
          <div className="h-2 bg-muted-foreground/20 rounded-full w-1/2 mt-2 animate-pulse" />
        </div>
      </Card>
    );
  }

  return (
    <>
      {onBack && (
        <Button
          variant="ghost"
          className="mb-4 text-muted-foreground hover:text-foreground"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Editor
        </Button>
      )}
      <Card className="w-full overflow-hidden">
        <div className="relative aspect-video group">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setIsFullscreen(true)}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </button>

          {/* Video Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between text-white">
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm opacity-75">{duration}</p>
              </div>
              <VideoActions 
                onEdit={() => console.log('Edit video')}
                onDelete={() => console.log('Delete video')}
                onDownload={() => console.log('Download video')}
                onLike={() => console.log('Like video')}
              />
            </div>
          </div>
        </div>
      </Card>

      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-black border-0">
          <DialogTitle className="sr-only">Video Player</DialogTitle>
          
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-50"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <video
              src={videoUrl}
              poster={thumbnail}
              controls
              className="w-full h-full"
              autoPlay
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}