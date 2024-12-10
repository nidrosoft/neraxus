"use client";

import { useState } from "react";
import { VideoResult } from "@/components/video-creation/video-result";
import { AudioUpload } from "@/components/video-creation/audio-upload";
import { DocumentUpload } from "@/components/video-creation/document-upload";
import { WeblinkSource } from "@/components/video-creation/weblink-source";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PenTool, Music, FileType, Link, Video, Coins } from "lucide-react";

const tools = [
  { icon: PenTool, label: "Prompt", value: "prompt" },
  { icon: Music, label: "Audio", value: "audio" },
  { icon: FileType, label: "Document", value: "document" },
  { icon: Link, label: "Weblink", value: "weblink" },
];

export default function VideoCreationPage() {
  const [activeTab, setActiveTab] = useState("prompt");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<any>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setGeneratedVideo({
      videoUrl: "/sample-video.mp4",
      thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
      title: "Mountain Adventure",
      duration: "2:30"
    });
    
    setIsGenerating(false);
  };

  const handleBack = () => {
    setGeneratedVideo(null);
  };

  return (
    <div className="h-full p-4 space-y-8 max-w-[1200px] mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Video Creation</h1>
        <p className="text-muted-foreground">
          Create videos using AI avatars, or generate videos from text prompts with our Text-to-Video tool!
        </p>
      </div>

      {!generatedVideo ? (
        <>
          <div className="flex justify-center">
            <ToggleGroup 
              type="single" 
              value={activeTab}
              onValueChange={(value) => value && setActiveTab(value)}
              className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm"
            >
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
                <label className="text-sm font-medium">Video Type</label>
                <Select defaultValue="reel">
                  <SelectTrigger>
                    <SelectValue placeholder="Reel - 1080px / 1920px" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reel">Reel - 1080px / 1920px</SelectItem>
                    <SelectItem value="landscape">Landscape - 1920px / 1080px</SelectItem>
                    <SelectItem value="square">Square - 1080px / 1080px</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Presenter</label>
                <Select defaultValue="valery">
                  <SelectTrigger>
                    <SelectValue placeholder="Valery Cheplygin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="valery">Valery Cheplygin</SelectItem>
                    <SelectItem value="anna">Anna Smith</SelectItem>
                    <SelectItem value="john">John Doe</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Voice</label>
                <Select defaultValue="jan">
                  <SelectTrigger>
                    <SelectValue placeholder="Jan Kallwejt" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jan">Jan Kallwejt</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="mike">Mike Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Quality</label>
                <Select defaultValue="720p">
                  <SelectTrigger>
                    <SelectValue placeholder="720p" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="4k">4K</SelectItem>
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
                <label className="text-sm font-medium">Video Format</label>
                <Select defaultValue="mp4">
                  <SelectTrigger>
                    <SelectValue placeholder="MP4" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">MP4</SelectItem>
                    <SelectItem value="mov">MOV</SelectItem>
                    <SelectItem value="avi">AVI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>

            <div className="space-y-6">
              {activeTab === "prompt" ? (
                <Card className="p-6">
                  <Textarea 
                    placeholder="What do you want to generate?"
                    className="min-h-[200px] resize-none border-0 focus-visible:ring-0 p-0"
                  />
                </Card>
              ) : activeTab === "audio" ? (
                <AudioUpload onUpload={setAudioFile} />
              ) : activeTab === "document" ? (
                <DocumentUpload onUpload={setDocumentFile} />
              ) : activeTab === "weblink" ? (
                <WeblinkSource onUrlSubmit={setVideoUrl} />
              ) : null}

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={handleGenerate}
                disabled={isGenerating || 
                  (activeTab === "audio" && !audioFile) ||
                  (activeTab === "document" && !documentFile) ||
                  (activeTab === "weblink" && !videoUrl)
                }
              >
                <Coins className="w-4 h-4 mr-2" />
                {isGenerating ? "Generating..." : "Generate Video by 12 Tokens"}
              </Button>

              {isGenerating && (
                <VideoResult
                  videoUrl=""
                  thumbnail=""
                  title=""
                  duration=""
                  isLoading={true}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-4xl mx-auto">
          <VideoResult {...generatedVideo} onBack={handleBack} />
        </div>
      )}
    </div>
  );
}