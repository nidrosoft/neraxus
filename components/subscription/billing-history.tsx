"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface BillingRecord {
  planName: string;
  paymentDate: string;
  expireDate: string;
  amount: string;
}

const billingHistory: BillingRecord[] = [
  { planName: "Annual", paymentDate: "30 Oct, 2023", expireDate: "30 Oct, 2024", amount: "$64.00" },
  { planName: "Annual", paymentDate: "30 Oct, 2022", expireDate: "30 Oct, 2023", amount: "$64.00" },
  { planName: "Annual", paymentDate: "30 Oct, 2021", expireDate: "30 Oct, 2022", amount: "$64.00" },
  { planName: "Annual", paymentDate: "30 Oct, 2020", expireDate: "30 Oct, 2021", amount: "$64.00" },
];

export function BillingHistory() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Billing History</h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg border overflow-hidden">
        <div className="grid grid-cols-5 p-4 border-b bg-muted/50">
          <div className="text-sm font-medium text-muted-foreground">Plan Name</div>
          <div className="text-sm font-medium text-muted-foreground">Payment Date</div>
          <div className="text-sm font-medium text-muted-foreground">Expire Date</div>
          <div className="text-sm font-medium text-muted-foreground">Amount</div>
          <div className="text-sm font-medium text-muted-foreground">Invoice</div>
        </div>
        {billingHistory.map((record, index) => (
          <div key={index} className="grid grid-cols-5 p-4 border-b last:border-0">
            <div className="text-sm">{record.planName}</div>
            <div className="text-sm">{record.paymentDate}</div>
            <div className="text-sm">{record.expireDate}</div>
            <div className="text-sm">{record.amount}</div>
            <div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-purple-600 hover:text-purple-700 text-xs"
              >
                <Download className="w-4 h-4 mr-1" />
                Download Invoice
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}