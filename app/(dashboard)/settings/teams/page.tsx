"use client";

import { TeamsView } from "@/components/settings/teams-view";

export default function TeamsPage() {
  return (
    <div className="h-full p-4 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold">Settings</h2>
      </div>
      <TeamsView />
    </div>
  );
}