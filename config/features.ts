import { FileText, Image as ImageIcon, Video, Wand2 } from "lucide-react";

export const features = [
  {
    title: "Image to Article",
    description: "Convert images into well-written articles",
    image: "/features/image-to-article.png",
    icon: FileText,
  },
  {
    title: "Prompt to Image",
    description: "Generate images from text descriptions",
    image: "/features/prompt-to-image.png",
    icon: ImageIcon,
  },
  {
    title: "Audio to Video",
    description: "Transform audio into engaging videos",
    image: "/features/audio-to-video.png",
    icon: Video,
  },
  {
    title: "Reimagine",
    description: "Give your content a fresh perspective",
    image: "/features/reimagine.png",
    icon: Wand2,
  },
];

export const mostUsed = [
  { label: "Video to Article", count: 365, icon: FileText },
  { label: "Weblink to Article", count: 282, icon: FileText },
  { label: "Audio to Video", count: 136, icon: Video },
  { label: "Prompt to Image", count: 109, icon: ImageIcon },
  { label: "Prompt to Video", count: 85, icon: Video },
  { label: "Prompt to Article", count: 17, icon: FileText },
];