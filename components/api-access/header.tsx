"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function ApiHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="text-muted-foreground">API Access</span>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="text-2xl md:text-4xl font-bold">API Access</h2>
    </div>
  );
}