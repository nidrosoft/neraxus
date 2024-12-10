"use client";

import { WalletHeader } from "@/components/wallet/header";
import { CreditCards } from "@/components/wallet/credit-cards";

export default function WalletPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">My Wallet</h2>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-6">
        <CreditCards />
      </div>
    </div>
  );
}