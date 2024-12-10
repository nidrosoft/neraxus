"use client";

import { Card } from "@/components/ui/card";

export function PremiumHeader() {
  return (
    <Card className="p-6 text-center space-y-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <h1 className="text-3xl md:text-4xl font-bold">
        Unlock the power of Neraxus
      </h1>
      <p className="text-lg text-purple-100">
        Choose the perfect plan for your content creation needs
      </p>
    </Card>
  );
}