"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import Image from "next/image";

export function EmptyTeam() {
  return (
    <Card className="p-8 flex flex-col items-center justify-center text-center space-y-6">
      <div className="w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
        <Image
          src="/images/team-placeholder.svg"
          alt="Team"
          width={48}
          height={48}
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">You're not a member of a team yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Start a new team to <span className="text-purple-600">collaborate and create</span> with your teammates.
        </p>
      </div>

      <Button 
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
      >
        <Crown className="w-4 h-4 mr-2" />
        Upgrade Account
      </Button>
    </Card>
  );
}