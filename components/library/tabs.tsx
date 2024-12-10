"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileText, Image, Video, Heart, ThumbsUp, Bookmark } from "lucide-react";

type ViewType = "articles" | "images" | "videos" | "follower" | "liked" | "collections";

interface LibraryTabsProps {
  activeTab: ViewType;
  onTabChange: (tab: ViewType) => void;
}

export function LibraryTabs({ activeTab, onTabChange }: LibraryTabsProps) {
  return (
    <div className="flex justify-center">
      <ToggleGroup 
        type="single" 
        value={activeTab}
        onValueChange={(value) => value && onTabChange(value as ViewType)}
        className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm inline-flex flex-wrap justify-center gap-2"
      >
        <ToggleGroupItem
          value="articles"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
        >
          <FileText className="h-4 w-4" />
          Your Articles
        </ToggleGroupItem>
        <ToggleGroupItem
          value="images"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
        >
          <Image className="h-4 w-4" />
          Your Images
        </ToggleGroupItem>
        <ToggleGroupItem
          value="videos"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
        >
          <Video className="h-4 w-4" />
          Your Videos
        </ToggleGroupItem>
        <ToggleGroupItem
          value="follower"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
        >
          <Heart className="h-4 w-4" />
          Follower Feed
        </ToggleGroupItem>
        <ToggleGroupItem
          value="liked"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
        >
          <ThumbsUp className="h-4 w-4" />
          Liked Feed
        </ToggleGroupItem>
        <ToggleGroupItem
          value="collections"
          className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
        >
          <Bookmark className="h-4 w-4" />
          Collections
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}