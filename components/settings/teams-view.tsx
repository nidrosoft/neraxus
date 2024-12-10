"use client";

import { EmptyTeam } from "@/components/settings/teams/empty-team";

export function TeamsView() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <EmptyTeam />
    </div>
  );
}