"use client";

import { LineChart as Chart } from "@tremor/react";

const chartdata = [
  { date: "0", value: 100 },
  { date: "10", value: 200 },
  { date: "20", value: 150 },
  { date: "30", value: 300 },
  { date: "40", value: 200 },
  { date: "50", value: 400 },
  { date: "60", value: 350 },
  { date: "70", value: 300 },
];

export function LineChart() {
  return (
    <Chart
      className="h-[200px]"
      data={chartdata}
      index="date"
      categories={["value"]}
      colors={["purple"]}
      showAnimation={true}
      showLegend={false}
      showGridLines={false}
      showXAxis={true}
      showYAxis={true}
      curveType="monotone"
    />
  );
}