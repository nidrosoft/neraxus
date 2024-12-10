import { cn } from "@/lib/utils";
import { mostUsed } from "@/config/features";
import { FileText, Image as ImageIcon, Video } from "lucide-react";

export function MostUsedSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Most Uses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mostUsed.map((item) => (
          <div
            key={item.label}
            className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border hover:border-purple-500 transition-all"
          >
            <item.icon className={cn(
              "h-8 w-8 mr-4",
              item.icon === FileText && "text-blue-500",
              item.icon === Video && "text-green-500",
              item.icon === ImageIcon && "text-purple-500"
            )} />
            <div>
              <p className="font-medium">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.count} Generated</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}