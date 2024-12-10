import Link from "next/link";
import { UserProfileCard } from "../user-profile-card";

export function SidebarHeader() {
  return (
    <div className="px-3 pt-4">
      <Link href="/dashboard" className="flex items-center pl-3 mb-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Neraxus
        </h1>
      </Link>
      <UserProfileCard />
    </div>
  );
}