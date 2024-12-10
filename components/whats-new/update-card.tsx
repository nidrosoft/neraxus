"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

interface Update {
  date: string;
  title: string;
  description: string;
}

const update: Update = {
  date: "10 Nov 2023",
  title: "A powerful mix: Phoenix + Style Reference",
  description: "Create infinite images, all in your style.",
};

export function UpdateCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">{update.date}</p>
        <h3 className="text-2xl font-bold">{update.title}</h3>
        <p className="text-muted-foreground">{update.description}</p>
      </div>

      <div 
        className="relative aspect-[16/9] rounded-lg overflow-hidden border bg-gradient-to-br from-purple-900/90 to-pink-900/90 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            variant="ghost"
            className={`w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 ${
              isHovered ? 'scale-110 bg-white/20' : 'scale-100'
            }`}
          >
            {isHovered ? (
              <Play className="w-8 h-8 text-white fill-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </Button>
        </div>
        <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex items-center justify-between text-white">
            <span className="text-sm font-medium">0:00 / 2:30</span>
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
        </div>
      </div>

      <div className="space-y-4">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p>
            We're excited to introduce our latest feature that combines the power of Phoenix AI with Style Reference technology. This update brings:
          </p>
          <ul>
            <li>Enhanced image generation capabilities</li>
            <li>More precise style matching</li>
            <li>Improved processing speed</li>
            <li>Better quality outputs</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">New Feature</Badge>
          <Badge variant="secondary">AI</Badge>
          <Badge variant="secondary">Image Generation</Badge>
        </div>
      </div>
    </div>
  );
}