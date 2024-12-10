"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CreditCard, Trash2 } from "lucide-react";
import { AddCardDialog } from "./add-card-dialog";
import Image from "next/image";

interface CreditCardProps {
  type: "paypal" | "stripe" | "mastercard";
  lastFour: string;
  expiry: string;
  isDefault?: boolean;
  isExpired?: boolean;
}

const cards: CreditCardProps[] = [
  { type: "paypal", lastFour: "65454", expiry: "06/24", isDefault: true },
  { type: "stripe", lastFour: "65454", expiry: "06/24" },
  { type: "mastercard", lastFour: "65454", expiry: "06/24" },
  { type: "mastercard", lastFour: "65454", expiry: "06/24", isExpired: true },
];

function CardLogo({ type }: { type: CreditCardProps["type"] }) {
  const logos = {
    paypal: "/payment-logos/paypal.svg",
    stripe: "/payment-logos/stripe.svg",
    mastercard: "/payment-logos/mastercard.svg",
  };

  return (
    <div className="w-8 h-8">
      <Image
        src={logos[type]}
        alt={`${type} logo`}
        width={32}
        height={32}
      />
    </div>
  );
}

export function CreditCards() {
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-purple-50 dark:bg-purple-900/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <CreditCard className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Credit Card(s)</h3>
              <p className="text-xs text-muted-foreground">
                Manage your credit cards and payment options
              </p>
            </div>
          </div>
          <Button 
            size="sm"
            onClick={() => setIsAddCardOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
          >
            Add new card
          </Button>
        </div>
      </Card>

      <div className="space-y-3">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="p-4 bg-white dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CardLogo type={card.type} />
                <div>
                  <p className="font-medium text-sm capitalize">
                    {card.type}card ending in {card.lastFour}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Expires {card.expiry}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {card.isDefault ? (
                  <span className="px-2 py-0.5 text-xs bg-purple-600 text-white rounded-full">
                    Default
                  </span>
                ) : card.isExpired ? (
                  <span className="px-2 py-0.5 text-xs bg-pink-100 text-pink-600 rounded-full">
                    Expired
                  </span>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 text-xs"
                  >
                    Set as Default
                  </Button>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Trash2 className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <AddCardDialog 
        isOpen={isAddCardOpen}
        onClose={() => setIsAddCardOpen(false)}
      />
    </div>
  );
}