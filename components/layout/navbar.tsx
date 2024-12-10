"use client";

import { UserButton } from "@/components/user-button";
import { TokenDisplay } from "@/components/token-display";
import { MobileSidebar } from "./mobile-sidebar";

export function Navbar() {
  return (
    <div className="flex items-center p-4 border-b bg-white dark:bg-gray-900">
      <MobileSidebar />
      <TokenDisplay tokens={100} usedTokens={45} />
      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  );
}