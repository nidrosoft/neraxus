"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function WhatsNewHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="text-muted-foreground">What's New</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="text-2xl md:text-4xl font-bold">What's New</h2>
    </div>
  );
}