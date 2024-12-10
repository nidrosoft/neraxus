"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FileText, Image as ImageIcon, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { features, mostUsed } from "@/config/features";

export default function DashboardPage() {
  return (
    <div className="h-full p-4 space-y-6">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <Card className="mb-6 overflow-hidden">
          <div className="h-[300px] p-8 flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <h1 className="text-4xl font-bold mb-4">Make Your Ideas Happen</h1>
            <p className="text-xl opacity-90 mb-8">One platform, infinite possibilities</p>
            
            <ToggleGroup type="single" className="bg-white/10 p-1 rounded-full">
              <ToggleGroupItem value="image" className="rounded-full px-6 py-2 data-[state=on]:bg-white data-[state=on]:text-purple-600">
                <ImageIcon className="mr-2 h-5 w-5" />
                Image Creation
              </ToggleGroupItem>
              <ToggleGroupItem value="article" className="rounded-full px-6 py-2 data-[state=on]:bg-white data-[state=on]:text-purple-600">
                <FileText className="mr-2 h-5 w-5" />
                Article Generation
              </ToggleGroupItem>
              <ToggleGroupItem value="video" className="rounded-full px-6 py-2 data-[state=on]:bg-white data-[state=on]:text-purple-600">
                <Video className="mr-2 h-5 w-5" />
                Video Creation
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-4 border-2 hover:border-purple-500 transition-all">
              <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-purple-50 dark:bg-purple-900/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Most Uses */}
        <div>
          <h2 className="text-xl font-bold mb-4">Most Uses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mostUsed.map((item) => (
              <Card
                key={item.label}
                className="p-4 hover:border-purple-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <item.icon className={cn(
                    "h-8 w-8",
                    item.icon === FileText && "text-blue-500",
                    item.icon === Video && "text-green-500",
                    item.icon === ImageIcon && "text-purple-500"
                  )} />
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.count} Generated</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}