"use client";

import React from "react";

interface Country {
  name: string;
  percentage: number;
  flag: string;
}

interface CountryStatsProps {
  total: number;
  growth: number;
  growthPercentage: number;
  countries: Country[];
}

export function CountryStats({ total, growth, growthPercentage, countries }: CountryStatsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Active users in countries</h3>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-2xl font-bold">{total.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">
              User added {growth} this week
            </p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 px-2 py-1 rounded-md text-sm">
            {growthPercentage}%
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {countries.map((country) => (
          <div key={country.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm">{country.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-600"
                  style={{ width: `${country.percentage}%` }}
                />
              </div>
              <span className="text-sm text-muted-foreground">
                {country.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}