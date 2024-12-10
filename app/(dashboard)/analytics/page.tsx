"use client";

import { AnalyticsHeader } from "@/components/analytics/header";
import { AnalyticsTabs } from "@/components/analytics/tabs";
import { MetricsGrid } from "@/components/analytics/metrics-grid";
import { WorldMapStats } from "@/components/analytics/world-map-stats";

export default function AnalyticsPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Analytics</h2>
        <p className="text-muted-foreground">Actionable Insights at Your Fingertips</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <AnalyticsTabs />
        <MetricsGrid />
        <WorldMapStats />
      </div>
    </div>
  );
}