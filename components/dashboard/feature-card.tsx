import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, image, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="p-4 border-2 hover:border-purple-500 transition-all group cursor-pointer">
      <div className="aspect-video relative rounded-lg overflow-hidden mb-4 bg-muted">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
        <Icon className="w-8 h-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}