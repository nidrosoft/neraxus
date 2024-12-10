"use client";

import { memo } from "react";
import Link from "next/link";
import { UserProfileCard } from "./user-profile-card";
import { SidebarItem } from "./sidebar-item";
import { routes, socialLinks, legalLinks } from "@/config/routes";
import { cn } from "@/lib/utils";

function SidebarComponent() {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r">
      <div className="px-3 pt-4">
        <Link href="/dashboard" className="flex items-center pl-3 mb-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Neraxus
          </h1>
        </Link>
        <UserProfileCard />
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-none px-3">
        <nav className="space-y-1">
          {routes.map((section, index) => (
            <div key={`section-${index}`} className="space-y-1">
              {section.items.map((route) => (
                <SidebarItem key={route.href} {...route} />
              ))}
              {section.divider && (
                <div className="mx-3 my-1 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent" />
              )}
            </div>
          ))}
        </nav>
      </div>

      <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-700">
        <div className="flex items-center justify-center gap-4 mb-4">
          {socialLinks.map((social, index) => (
            <Link
              key={`social-${index}`}
              href={social.href}
              className={cn("hover:opacity-75 transition", social.color)}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 text-sm text-zinc-500">
          {legalLinks.map((link, index) => (
            <div key={`legal-${link.href}`} className="flex items-center">
              <Link
                href={link.href}
                className="hover:text-zinc-800 dark:hover:text-zinc-300 transition"
              >
                {link.label}
              </Link>
              {index < legalLinks.length - 1 && (
                <span className="mx-3 text-zinc-300 dark:text-zinc-700">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const Sidebar = memo(SidebarComponent);