"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

function SidebarItemComponent({ icon: Icon, label, href, color }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      prefetch={true}
      className={cn(
        "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
        isActive
          ? "text-white bg-gradient-to-r from-purple-600 to-pink-600"
          : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      )}
    >
      <div className="flex items-center flex-1">
        <Icon 
          className={cn(
            "h-4 w-4 mr-3",
            isActive ? "text-white" : color
          )} 
        />
        {label}
      </div>
    </Link>
  );
}

export const SidebarItem = memo(SidebarItemComponent);