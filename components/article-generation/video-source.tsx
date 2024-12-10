"use client";

import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const videoSources = [
  { label: "Youtube", value: "youtube" },
  { label: "Vimeo", value: "vimeo" }
];

export function VideoSource() {
  const [selectedSource, setSelectedSource] = useState(videoSources[0].value);

  return (
    <div className="space-y-4">
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
                {videoSources.map((source) => (
                  <SelectItem key={source.value} value={source.value}>
                    {source.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Video URL</label>
            <Input
              placeholder={`Past the ${selectedSource} link here...`}
              className="w-full"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}