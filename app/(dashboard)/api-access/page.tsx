"use client";

import { ApiHeader } from "@/components/api-access/header";
import { ApiFeatures } from "@/components/api-access/features";
import { ApiPlans } from "@/components/api-access/plans";

export default function ApiAccessPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">API Access</h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
          <ApiFeatures />
          <ApiPlans />
        </div>
      </div>
    </div>
  );
}