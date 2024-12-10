"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileText, Image as ImageIcon, Video } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("image");

  return (
    <div className="text-center">
      <div className="h-[400px] rounded-xl p-8 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Make Your Ideas Happen</h1>
        <p className="text-lg md:text-xl opacity-90">One platform, infinite possibilities</p>
        
        <div className="mt-8 w-full max-w-2xl mx-auto">
          <ToggleGroup 
            type="single" 
            value={activeTab}
            onValueChange={(value) => value && setActiveTab(value)}
            className="bg-white/10 p-1 rounded-full flex flex-wrap justify-center gap-2"
          >
            <ToggleGroupItem 
              value="image" 
              className="rounded-full px-4 md:px-6 py-2 data-[state=on]:bg-white data-[state=on]:text-purple-600 flex items-center"
            >
              <ImageIcon className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
              <span className="hidden md:inline">Image Creation</span>
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="article" 
              className="rounded-full px-4 md:px-6 py-2 data-[state=on]:bg-white data-[state=on]:text-purple-600 flex items-center"
            >
              <FileText className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
              <span className="hidden md:inline">Article Generation</span>
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="video" 
              className="rounded-full px-4 md:px-6 py-2 data-[state=on]:bg-white data-[state=on]:text-purple-600 flex items-center"
            >
              <Video className="h-4 w-4 md:h-5 md:w-5 md:mr-2" />
              <span className="hidden md:inline">Video Creation</span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}