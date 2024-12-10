"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { User2, Users, Settings } from "lucide-react";
import { ProfileForm } from "@/components/settings/profile-form";
import { TeamsView } from "@/components/settings/teams-view";
import { AccountManagementView } from "@/components/settings/account-management-view";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">Settings</h2>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
        <div className="flex justify-center">
          <ToggleGroup 
            type="single" 
            value={activeTab}
            onValueChange={(value) => value && setActiveTab(value)}
            className="bg-white dark:bg-gray-800 p-1 rounded-full shadow-sm"
          >
            <ToggleGroupItem
              value="profile"
              className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
            >
              <User2 className="h-4 w-4" />
              Profile
            </ToggleGroupItem>
            <ToggleGroupItem
              value="teams"
              className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
            >
              <Users className="h-4 w-4" />
              Teams
            </ToggleGroupItem>
            <ToggleGroupItem
              value="account"
              className="data-[state=on]:bg-gradient-to-r data-[state=on]:from-purple-600 data-[state=on]:to-pink-600 data-[state=on]:text-white rounded-full px-4 py-2 flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Account Management
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {activeTab === "profile" && <ProfileForm />}
        {activeTab === "teams" && <TeamsView />}
        {activeTab === "account" && <AccountManagementView />}
      </div>
    </div>
  );
}