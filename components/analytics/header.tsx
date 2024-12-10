"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function AnalyticsHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="text-muted-foreground">Analytics</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="font-medium">Article Analytics</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Analytics</h2>
        <p className="text-muted-foreground">Actionable Insights at Your Fingertips</p>
      </div>
    </div>
  );
}