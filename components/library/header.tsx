"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function LibraryHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="text-muted-foreground">Library</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="font-medium">Your Articles</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="text-2xl md:text-4xl font-bold">Library</h2>
    </div>
  );
}