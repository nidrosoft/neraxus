"use client";

import React from "react";

export function WorldMap() {
  return (
    <div className="relative w-full aspect-[2/1] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        World Map Visualization
      </div>
    </div>
  );
}