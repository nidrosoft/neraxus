"use client";

import { Coins } from "lucide-react";

interface TokenDisplayProps {
  tokens: number;
  usedTokens: number;
}

export function TokenDisplay({ tokens, usedTokens }: TokenDisplayProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full">
      <Coins className="h-4 w-4" />
      <span className="text-sm font-medium">
        {tokens}/{usedTokens} tokens
      </span>
    </div>
  );
}