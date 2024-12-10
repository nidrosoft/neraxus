"use client";

import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";

export function SubscriptionPlan() {
  return (
    <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <Crown className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Current Plan</h3>
            <p className="text-xs text-muted-foreground">
              Free Plan (Personal)
            </p>
          </div>
        </div>
        <Button 
          size="sm"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
        >
          Upgrade
        </Button>
      </div>
    </div>
  );
}