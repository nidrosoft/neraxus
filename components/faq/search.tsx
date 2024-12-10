"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function FaqSearch() {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="pl-10 h-12"
        placeholder="Search for Articles....."
      />
    </div>
  );
}