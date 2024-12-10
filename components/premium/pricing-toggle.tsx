"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function PricingToggle() {
  const [billing, setBilling] = useState("monthly");

  return (
    <Card className="p-4 flex justify-center">
      <ToggleGroup
        type="single"
        value={billing}
        onValueChange={(value) => value && setBilling(value)}
        className="inline-flex p-1 bg-purple-50 dark:bg-purple-900/10 rounded-full"
      >
        <ToggleGroupItem
          value="monthly"
          className="px-6 py-2 rounded-full data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white"
        >
          Monthly Billing
        </ToggleGroupItem>
        <ToggleGroupItem
          value="yearly"
          className="px-6 py-2 rounded-full data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white"
        >
          Annual Billing
          <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">
            Save 20%
          </span>
        </ToggleGroupItem>
      </ToggleGroup>
    </Card>
  );
}