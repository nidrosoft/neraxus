"use client";

import { ContentTable } from "./content-table";
import { ImageGallery } from "./image-gallery";
import { VideoGallery } from "./video-gallery";
import { FollowerFeed } from "./follower-feed";
import { LikedFeed } from "./liked-feed";
import { CollectionsGrid } from "./collections-grid";

type ViewType = "articles" | "images" | "videos" | "follower" | "liked" | "collections";

interface ContentViewProps {
  activeTab: ViewType;
}

export function ContentView({ activeTab }: ContentViewProps) {
  return (
    <div className="space-y-4">
      {activeTab === "articles" && <ContentTable />}
      {activeTab === "images" && <ImageGallery />}
      {activeTab === "videos" && <VideoGallery />}
      {activeTab === "follower" && <FollowerFeed />}
      {activeTab === "liked" && <LikedFeed />}
      {activeTab === "collections" && <CollectionsGrid />}
    </div>
  );
}