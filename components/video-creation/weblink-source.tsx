"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "lucide-react";
import { useState } from "react";

interface WeblinkSourceProps {
  onUrlSubmit?: (url: string) => void;
}

export function WeblinkSource({ onUrlSubmit }: WeblinkSourceProps) {
  const [selectedSource, setSelectedSource] = useState("youtube");
  const [url, setUrl] = useState("");

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    onUrlSubmit?.(e.target.value);
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Video Source</label>
          <Select
            value={selectedSource}
            onValueChange={setSelectedSource}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="vimeo">Vimeo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Link className="w-4 h-4 text-purple-500" />
            <label className="text-sm font-medium">Video URL</label>
          </div>
          <Input
            value={url}
            onChange={handleUrlChange}
            placeholder={`Past the ${selectedSource} link here...`}
            className="w-full"
          />
          <p className="text-xs text-muted-foreground">
            Enter a valid {selectedSource === "youtube" ? "YouTube" : "Vimeo"} video URL
          </p>
        </div>
      </div>
    </Card>
  );
}