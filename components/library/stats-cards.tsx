"use client";

import { Card } from "@/components/ui/card";
import { FileText, Eye, PenTool, Clock } from "lucide-react";

const stats = [
  { title: "Total Article", value: "67", icon: FileText, color: "bg-purple-50 dark:bg-purple-900/10", iconColor: "text-purple-500" },
  { title: "Published", value: "49", icon: Eye, color: "bg-amber-50 dark:bg-amber-900/10", iconColor: "text-amber-500" },
  { title: "Draft", value: "05", icon: PenTool, color: "bg-pink-50 dark:bg-pink-900/10", iconColor: "text-pink-500" },
  { title: "Schedule", value: "13", icon: Clock, color: "bg-cyan-50 dark:bg-cyan-900/10", iconColor: "text-cyan-500" },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className={`p-4 ${stat.color}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
            <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
          </div>
        </Card>
      ))}
    </div>
  );
}