"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Heart,
  Download,
  Share2,
  MoreVertical,
  Copy,
  Link,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

interface VideoActionsProps {
  onEdit?: () => void;
  onDelete?: () => void;
  onLike?: () => void;
  onDownload?: () => void;
}

export function VideoActions({ onEdit, onDelete, onLike, onDownload }: VideoActionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isShareDialogOpen, setIsShareDialogOpen] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
      <div className="flex items-center justify-between text-white">
        <span className="text-sm">0:00 / 2:30</span>
        <div className="space-x-2">
          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
            720p
          </Button>
          <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
            1.0x
          </Button>
        </div>
      </div>
      <div className="mt-2 h-1 bg-white/30 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-white rounded-full" />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className={`text-white hover:bg-white/20 ${isLiked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={onDownload}
          >
            <Download className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => setIsShareDialogOpen(true)}
          >
            <Share2 className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <Dialog open={isShareDialogOpen} onOpenChange={setIsShareDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle>Share Video</DialogTitle>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Input 
                readOnly 
                value={window.location.href}
                className="flex-1"
              />
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleCopyLink}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full hover:bg-blue-50 hover:text-blue-600"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full hover:bg-sky-50 hover:text-sky-600"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full hover:bg-blue-50 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full hover:bg-purple-50 hover:text-purple-600"
              >
                <Link className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}