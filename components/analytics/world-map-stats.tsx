"use client";

import { Card } from "@/components/ui/card";
import { WorldMap } from "@/components/analytics/charts/world-map";
import { CountryStats } from "@/components/analytics/charts/country-stats";

export function WorldMapStats() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr,300px]">
      <Card className="p-4">
        <WorldMap />
      </Card>
      <Card className="p-4">
        <CountryStats 
          total={7269}
          growth={572}
          growthPercentage={8.72}
          countries={[
            { name: "United States", percentage: 92, flag: "🇺🇸" },
            { name: "Liberia", percentage: 16, flag: "🇱🇷" },
            { name: "England", percentage: 52, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
            { name: "Bangladesh", percentage: 68, flag: "🇧🇩" },
            { name: "China", percentage: 39, flag: "🇨🇳" },
            { name: "Spain", percentage: 57, flag: "🇪🇸" },
            { name: "Turkey", percentage: 46, flag: "🇹🇷" },
            { name: "Brazil", percentage: 75, flag: "🇧🇷" },
            { name: "Bulgaria", percentage: 24, flag: "🇧🇬" },
            { name: "Japan", percentage: 52, flag: "🇯🇵" },
          ]}
        />
      </Card>
    </div>
  );
}