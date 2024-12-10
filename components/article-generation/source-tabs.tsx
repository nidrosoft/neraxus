"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PenTool, Image, Video, Music, FileType, Link } from "lucide-react";
import { useState } from "react";

const sources = [
  { icon: PenTool, label: "Prompt", value: "prompt" },
  { icon: Image, label: "Image", value: "image" },
  { icon: Video, label: "Video", value: "video" },
  { icon: Music, label: "Audio", value: "audio" },
  { icon: FileType, label: "Document", value: "document" },
  { icon: Link, label: "Weblink", value: "weblink" },
];

interface SourceTabsProps {
  activeSource: string;
  onSourceChange: (value: string) => void;
}

export function ArticleSourceTabs({ activeSource, onSourceChange }: SourceTabsProps) {
  return (
    <div className="flex justify-center">
      <ToggleGroup
        type="single"
        value={activeSource}
        onValueChange={(value) => value && onSourceChange(value)}
        className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm inline-flex"
      >
        {sources.map((source) => (
          <ToggleGroupItem
            key={source.value}
            value={source.value}
            className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <source.icon className="h-4 w-4" />
            <span>{source.label}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}