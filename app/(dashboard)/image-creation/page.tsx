"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { ImageIcon, ArrowUpDown, RefreshCcw, Wand2, Coins } from "lucide-react";

const tools = [
  { icon: ImageIcon, label: "Image Creation", value: "creation" },
  { icon: ArrowUpDown, label: "Upscaler", value: "upscaler" },
  { icon: RefreshCcw, label: "Retouch", value: "retouch" },
  { icon: Wand2, label: "Reimagine", value: "reimagine" },
];

const generationModes = ["Fast", "Quality", "Ultra"];

const numberOptions = ["1", "2", "3", "4"];

export default function ImageCreationPage() {
  const [activeTab, setActiveTab] = useState("creation");
  const [generationMode, setGenerationMode] = useState("Fast");
  const [imageCount, setImageCount] = useState("4");

  return (
    <div className="h-full p-4 space-y-8 max-w-[1200px] mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Image Creation</h1>
        <p className="text-muted-foreground">
          Create AI Art with our free AI image generator.
        </p>
      </div>

      <div className="flex justify-center">
        <ToggleGroup type="single" value={activeTab} onValueChange={(value) => value && setActiveTab(value)} className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm">
          {tools.map((tool) => (
            <ToggleGroupItem
              key={tool.value}
              value={tool.value}
              className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
            >
              <tool.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{tool.label}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Style</label>
            <Select defaultValue="photo">
              <SelectTrigger>
                <SelectValue placeholder="Photo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="photo">Photo</SelectItem>
                <SelectItem value="digital-art">Digital Art</SelectItem>
                <SelectItem value="painting">Painting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Camera</label>
            <Select defaultValue="low-angle">
              <SelectTrigger>
                <SelectValue placeholder="Low Angle Shot" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low-angle">Low Angle Shot</SelectItem>
                <SelectItem value="high-angle">High Angle Shot</SelectItem>
                <SelectItem value="eye-level">Eye Level</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Contrast</label>
            <Select defaultValue="medium">
              <SelectTrigger>
                <SelectValue placeholder="Medium" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Generation Mode</label>
            <ToggleGroup 
              type="single" 
              value={generationMode} 
              onValueChange={(value) => value && setGenerationMode(value)}
              className="justify-start"
            >
              {generationModes.map((mode) => (
                <ToggleGroupItem
                  key={mode}
                  value={mode}
                  className="data-[state=on]:bg-purple-100 data-[state=on]:text-purple-600 dark:data-[state=on]:bg-purple-900 dark:data-[state=on]:text-purple-200"
                >
                  {mode}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Number of Images</label>
            <ToggleGroup 
              type="single" 
              value={imageCount} 
              onValueChange={(value) => value && setImageCount(value)}
              className="justify-start"
            >
              {numberOptions.map((number) => (
                <ToggleGroupItem
                  key={number}
                  value={number}
                  className="data-[state=on]:bg-purple-100 data-[state=on]:text-purple-600 dark:data-[state=on]:bg-purple-900 dark:data-[state=on]:text-purple-200"
                >
                  {number}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Color</label>
            <div className="flex gap-2">
              <Input defaultValue="#456421" type="text" />
              <Input type="color" className="w-10 p-1 h-10" defaultValue="#456421" />
            </div>
          </div>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => {
              // Reset all form values to defaults
            }}
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <label className="text-sm font-medium">Prompt</label>
            <Textarea 
              placeholder="What do you want to generate?"
              className="mt-2 min-h-[200px] resize-none"
            />
          </Card>

          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Coins className="w-4 h-4 mr-2" />
            Image Create by 12 Tokens
          </Button>

          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full bg-purple-900 flex items-center justify-center mx-auto">
                <ImageIcon className="w-12 h-12 text-purple-300" />
              </div>
              <p className="mt-4 text-muted-foreground">No Image Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}