"use client";

import { Card } from "@/components/ui/card";
import { LineChart } from "@/components/analytics/charts/line-chart";
import { ClickBreakdown } from "@/components/analytics/charts/click-breakdown";
import { TimeHeatmap } from "@/components/analytics/charts/time-heatmap";
import { ArrowUpRight } from "lucide-react";

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium">Total Clicks</h3>
              <span className="text-xs text-muted-foreground">2.15%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">1,218</span>
              <span className="text-xs text-green-500 flex items-center">
                <ArrowUpRight className="w-3 h-3" />
                2.15%
              </span>
            </div>
          </div>
        </div>
        <LineChart />
      </Card>

      <Card className="p-4">
        <ClickBreakdown 
          data={[
            { label: "Network clicks", value: 10 },
            { label: "Opportunity clicks", value: 40 },
            { label: "Broken clicks", value: 75 },
            { label: "Other clicks", value: 275 },
            { label: "Medium", value: 75 },
          ]}
        />
      </Card>

      <Card className="p-4">
        <TimeHeatmap />
      </Card>
    </div>
  );
}