"use client";

import { useState } from "react";
import { ArticleSourceTabs } from "@/components/article-generation/source-tabs";
import { ArticleForm } from "@/components/article-generation/article-form";
import { ImageUpload } from "@/components/article-generation/image-upload";
import { VideoSource } from "@/components/article-generation/video-source";
import { AudioUpload } from "@/components/article-generation/audio-upload";
import { DocumentUpload } from "@/components/article-generation/document-upload";
import { WeblinkSource } from "@/components/article-generation/weblink-source";

export default function ArticleGenerationPage() {
  const [activeSource, setActiveSource] = useState("prompt");

  return (
    <div className="h-full p-4 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold">New Article Generation</h2>
        <p className="text-muted-foreground">
          Start by selecting a source, then choose how you want to create your article
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        <ArticleSourceTabs 
          activeSource={activeSource}
          onSourceChange={setActiveSource}
        />
        {activeSource === "prompt" ? (
          <ArticleForm />
        ) : activeSource === "image" ? (
          <>
            <ImageUpload />
            <ArticleForm hidePrompt />
          </>
        ) : activeSource === "video" ? (
          <>
            <VideoSource />
            <ArticleForm hidePrompt />
          </>
        ) : activeSource === "audio" ? (
          <>
            <AudioUpload />
            <ArticleForm hidePrompt />
          </>
        ) : activeSource === "document" ? (
          <>
            <DocumentUpload />
            <ArticleForm hidePrompt />
          </>
        ) : activeSource === "weblink" ? (
          <>
            <WeblinkSource />
            <ArticleForm hidePrompt />
          </>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            This source type is coming soon!
          </div>
        )}
      </div>
    </div>
  );
}