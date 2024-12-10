"use client";

import { PremiumHeader } from "@/components/premium/header";
import { PricingToggle } from "@/components/premium/pricing-toggle";
import { PricingCards } from "@/components/premium/pricing-cards";

export default function PremiumPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Premium Plans</h2>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <PremiumHeader />
        <PricingToggle />
        <PricingCards />
      </div>
    </div>
  );
}