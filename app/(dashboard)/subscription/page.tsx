"use client";

import { SubscriptionPlan } from "@/components/subscription/subscription-plan";
import { BillingHistory } from "@/components/subscription/billing-history";

export default function SubscriptionPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">My Subscription</h2>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
        <SubscriptionPlan />
        <BillingHistory />
      </div>
    </div>
  );
}