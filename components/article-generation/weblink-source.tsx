"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";

export function WeblinkSource() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Link className="w-5 h-5 text-purple-500" />
          <label className="text-sm font-medium">Website URL</label>
        </div>
        <Input
          placeholder="Past the link here..."
          className="w-full"
        />
        <p className="text-xs text-muted-foreground">
          Enter any webpage URL to generate an article from its content
        </p>
      </div>
    </Card>
  );
}