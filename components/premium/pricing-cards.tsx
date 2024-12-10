"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, HardDrive, Zap, Lock, Database } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Free",
    description: "Seamless Web 3.0 integration.\nEnhanced privacy. Decentralized apps.",
    price: "$0.00",
    features: [
      { icon: Users, text: "Personal Account" },
      { icon: HardDrive, text: "250MB of cloud storage" },
      { icon: Zap, text: "Seamless integration" },
      { icon: Lock, text: "Enhanced privacy" },
      { icon: Database, text: "Decentralized Applications" }
    ],
    buttonText: "Get start for free",
    buttonVariant: "outline" as const
  },
  {
    name: "Maestro Unlimited",
    description: "Seamless Web 3.0 integration.\nEnhanced privacy. Decentralized apps.",
    price: "$68.00",
    features: [
      { icon: Users, text: "4 free seats available" },
      { icon: HardDrive, text: "1GB of cloud storage" },
      { text: "TURQUOISE TREK", divider: true },
      { icon: Zap, text: "Supercharged tools" },
      { icon: Database, text: "+ AI-based" },
      { icon: Lock, text: "Personalized guidance" },
      { icon: Database, text: "Market insights" }
    ],
    buttonText: "Get start Now",
    buttonVariant: "gradient" as const,
    highlight: true
  },
  {
    name: "BrainAI for Teams",
    description: "Seamless Web 3.0 integration.\nEnhanced privacy. Decentralized apps.",
    price: "$200.00",
    features: [
      { icon: Users, text: "Unlimited Seats Available" },
      { icon: HardDrive, text: "250MB of cloud storage" },
      { icon: Zap, text: "Seamless integration" },
      { icon: Lock, text: "Enhanced privacy" },
      { icon: Database, text: "Decentralized Applications" }
    ],
    buttonText: "Get start Now",
    buttonVariant: "outline" as const
  }
];

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`relative overflow-hidden ${
            plan.highlight 
              ? 'bg-purple-900 text-white' 
              : 'bg-white dark:bg-gray-800'
          }`}
        >
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{plan.name}</h3>
            </div>

            <p className={`text-sm ${plan.highlight ? 'text-gray-300' : 'text-muted-foreground'}`}>
              {plan.description}
            </p>

            <div className="space-y-4">
              <span className="text-3xl font-bold">{plan.price}</span>
              <Button
                className={
                  plan.buttonVariant === "gradient"
                    ? "w-full bg-gradient-to-r from-purple-500 to-pink-500"
                    : "w-full"
                }
                variant={plan.buttonVariant === "gradient" ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </div>

            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                feature.divider ? (
                  <div key={index} className="py-2 text-sm border-t border-purple-700">
                    {feature.text}
                  </div>
                ) : (
                  <div key={index} className="flex items-center gap-2">
                    {feature.icon && <feature.icon className="w-4 h-4" />}
                    <span className="text-sm">{feature.text}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}