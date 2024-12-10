"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";

export function HelpSearch() {
  return (
    <Card className="p-4">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          className="pl-10 h-10"
          placeholder="Search for help articles..."
        />
      </div>
    </Card>
  );
}