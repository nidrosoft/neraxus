"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Coins, ChevronDown } from "lucide-react";

export function UserProfileCard() {
  return (
    <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-10 w-10 border-2 border-white">
          <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
          <AvatarFallback>UN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-white">uisaleh</h3>
          <p className="text-sm text-white/80">Personal</p>
        </div>
        <Button size="icon" variant="ghost" className="text-white hover:text-white/80">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Coins className="h-4 w-4" />
          <span className="text-sm">Tokens 100/45</span>
        </div>
        <Button size="sm" variant="secondary" className="text-purple-600 bg-white hover:bg-white/90">
          Upgrades
        </Button>
      </div>
    </div>
  );
}