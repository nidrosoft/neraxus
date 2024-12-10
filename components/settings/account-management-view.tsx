"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function AccountManagementView() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Manage Subscription</h3>
            <p className="text-sm text-muted-foreground">
              Manage payment method, change plan and more.
            </p>
          </div>
          <Button 
            className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            onClick={() => router.push("/subscription")}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            Manage Subscriptions
          </Button>
        </Card>

        <Card className="p-6 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Delete Account</h3>
            <p className="text-sm text-muted-foreground">
              Deleting your account will remove all of your information from our database. This cannot be undone.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="w-full mt-8 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete Account
          </Button>
        </Card>
      </div>
    </div>
  );
}