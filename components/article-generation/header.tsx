"use client";

import { Breadcrumb } from "@/components/ui/breadcrumb";

export function ArticleGenerationHeader() {
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <Breadcrumb.Item>Article Generation</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}