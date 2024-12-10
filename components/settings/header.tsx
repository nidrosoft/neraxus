"use client";

import React from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export function SettingsHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="text-muted-foreground">Settings</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="font-medium">Profile</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}