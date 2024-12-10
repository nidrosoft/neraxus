"use client";

import { Card } from "@/components/ui/card";
import { User2, Users2, HelpCircle, Users } from "lucide-react";

const categories = [
  {
    title: "Account Management",
    description: "How to manage your Neraxus account like subscriptions, payment details and more",
    icon: User2,
    authors: 2,
    articles: 5,
  },
  {
    title: "Affiliates and Creators",
    description: "Want to become a Neraxus partner? Learn how you can get involved and spread the word",
    icon: Users2,
    authors: 2,
    articles: 16,
  },
  {
    title: "Teams",
    description: "Guides to help users of Neraxus for Teams, Guides word spread.",
    icon: Users,
    authors: 2,
    articles: 12,
  },
  {
    title: "Help Guides",
    description: "How to use Neraxus you can get involved and spread the word spread.",
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
          className="p-6 hover:border-purple-500 transition-all cursor-pointer"
        >
          <div className="flex gap-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg h-fit">
              <category.icon className="w-5 h-5 text-purple-600" />
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">{category.title}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white dark:border-gray-800"
                    />
                  ))}
                </div>
                <span>{category.authors} Author</span>
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