"use client";

import { Card } from "@/components/ui/card";
import { User2, Users2, HelpCircle, Users } from "lucide-react";

const categories = [
  {
    title: "Account Management",
    description: "Manage your Neraxus account, subscriptions, and payment details",
    icon: User2,
    authors: 2,
    articles: 5,
  },
  {
    title: "Affiliates and Creators",
    description: "Learn how to become a Neraxus partner and spread the word",
    icon: Users2,
    authors: 2,
    articles: 16,
  },
  {
    title: "Teams",
    description: "Guides for Neraxus Teams users and collaboration features",
    icon: Users,
    authors: 2,
    articles: 12,
  },
  {
    title: "Help Guides",
    description: "Step-by-step guides for using Neraxus features",
    icon: HelpCircle,
    authors: 2,
    articles: 8,
  },
];

export function HelpCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {categories.map((category) => (
        <Card
          key={category.title}
          className="p-4 hover:border-purple-500 transition-all cursor-pointer"
        >
          <div className="flex gap-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg h-fit">
              <category.icon className="w-4 h-4 text-purple-600" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">{category.title}</h3>
              <p className="text-xs text-muted-foreground">{category.description}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full bg-purple-100 border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <span>{category.authors} Authors</span>
                <span>•</span>
                <span>{category.articles} articles</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}