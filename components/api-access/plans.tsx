"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Instantly setup your API keys",
  "Full access to all of features",
  "Full access to all of services",
  "3 plans tailored to your needs",
  "Credit top-up packages"
];

export function ApiPlans() {
  return (
    <div className="bg-purple-900 text-white rounded-3xl p-8 space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Introducing API Plans</h3>
        <p className="text-purple-200">
          Adding Neraxus to your products is now possible with API plans!
        </p>
      </div>

      <Button 
        size="lg"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        Subscribe to API Plan
      </Button>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-purple-300" />
            <span className="text-purple-100">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}