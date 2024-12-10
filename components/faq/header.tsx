"use client";

import { Breadcrumb } from "@/components/ui/breadcrumb";

export function FaqHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="text-muted-foreground">FAQ & Help</span>
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}