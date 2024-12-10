"use client";

import { useState } from "react";
import { LibraryTabs } from "@/components/library/tabs";
import { StatsCards } from "@/components/library/stats-cards";
import { ContentView } from "@/components/library/content-view";

type ViewType = "articles" | "images" | "videos" | "follower" | "liked" | "collections";

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<ViewType>("articles");

  return (
    <div className="h-full p-4 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Library</h2>
        <p className="text-muted-foreground">Manage your content library</p>
      </div>
      <div className="max-w-6xl mx-auto space-y-6">
        <LibraryTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <StatsCards />
        <ContentView activeTab={activeTab} />
      </div>
    </div>
  );
}