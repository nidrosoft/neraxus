"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileText, Link as LinkIcon, Coins, MonitorPlay, FileCode } from "lucide-react";

const postDestinations = [
  { icon: FileText, label: "Editor", value: "editor" },
  { icon: LinkIcon, label: "Website", value: "website" },
  { icon: FileCode, label: "Blogger", value: "blogger" },
  { icon: MonitorPlay, label: "Medium", value: "medium" },
  { icon: LinkIcon, label: "LinkedIn", value: "linkedin" },
];

interface ArticleFormProps {
  hidePrompt?: boolean;
}

export function ArticleForm({ hidePrompt }: ArticleFormProps) {
  return (
    <div className="space-y-6">
      {!hidePrompt && (
        <Card className="p-6">
          <Textarea
            placeholder="Type a prompt ..."
            className="min-h-[200px] resize-none border-0 focus-visible:ring-0 p-0"
          />
        </Card>
      )}

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-4">Post to</h3>
          <Card className="p-1.5">
            <ToggleGroup type="single" className="flex justify-between">
              {postDestinations.map((dest) => (
                <ToggleGroupItem
                  key={dest.value}
                  value={dest.value}
                  className="flex-1 data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-lg px-4 py-2.5 flex items-center justify-center gap-2"
                >
                  <dest.icon className="h-4 w-4" />
                  {dest.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Language</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Choose Type of Info Article</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Long Post Form" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="long">Long Post Form</SelectItem>
                <SelectItem value="short">Short Post Form</SelectItem>
                <SelectItem value="blog">Blog Post</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Image Source</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Unsplash" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unsplash">Unsplash</SelectItem>
                <SelectItem value="pexels">Pexels</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Video Source</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Youtube" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="youtube">Youtube</SelectItem>
                <SelectItem value="vimeo">Vimeo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
      >
        <Coins className="w-4 h-4 mr-2" />
        Generate Article by 15 Tokens
      </Button>
    </div>
  );
}