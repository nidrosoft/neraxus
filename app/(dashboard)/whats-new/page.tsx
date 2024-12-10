"use client";

import { WhatsNewHeader } from "@/components/whats-new/header";
import { UpdateCard } from "@/components/whats-new/update-card";

export default function WhatsNewPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">What's New</h2>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
        <UpdateCard />
      </div>
    </div>
  );
}