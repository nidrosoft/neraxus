"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileText, Image as ImageIcon, Video } from "lucide-react";
import { useState } from "react";

export function AnalyticsTabs() {
  const [activeTab, setActiveTab] = useState("article");

  return (
    <div className="flex justify-center">
      <ToggleGroup 
        type="single" 
        value={activeTab}
        onValueChange={(value) => value && setActiveTab(value)}
        className="inline-flex p-1 bg-white dark:bg-gray-800 rounded-full shadow-sm"
      >
        <ToggleGroupItem
          value="article"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-6 py-2.5 flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          <span>Article Analytics</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="image"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-6 py-2.5 flex items-center gap-2"
        >
          <ImageIcon className="h-4 w-4" />
          <span>Image Analytics</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="video"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-6 py-2.5 flex items-center gap-2"
        >
          <Video className="h-4 w-4" />
          <span>Video Analytics</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}