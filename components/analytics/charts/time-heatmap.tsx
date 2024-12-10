"use client";

import React from "react";
import { Card } from "@/components/ui/card";

interface TimeSlot {
  time: string;
  value: number;
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots: TimeSlot[] = [
  { time: "11 am", value: 240 },
  { time: "12 am", value: 150 },
  { time: "01 am", value: 180 },
  { time: "03 am", value: 120 },
];

export function TimeHeatmap() {
  const getOpacity = (value: number) => {
    const maxValue = Math.max(...timeSlots.map(slot => slot.value));
    return (value / maxValue) * 0.9 + 0.1; // Minimum opacity of 0.1
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Orders by time</h3>
        <span className="text-sm text-muted-foreground">2500</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => (
          <div key={day} className="text-xs text-center text-muted-foreground">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => {
          const timeSlot = timeSlots.find((_, index) => index === Math.floor(i / 7));
          const value = timeSlot?.value || 0;
          return (
            <div
              key={i}
              className="aspect-square rounded-sm bg-purple-600"
              style={{
                opacity: getOpacity(value),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}