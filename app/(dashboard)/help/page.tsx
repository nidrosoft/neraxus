"use client";

import { HelpHeader } from "@/components/help/header";
import { HelpSearch } from "@/components/help/search";
import { HelpCategories } from "@/components/help/categories";
import { FaqAccordion } from "@/components/help/faq-accordion";

export default function HelpPage() {
  return (
    <div className="h-full p-4 space-y-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold">How can we help?</h2>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6 space-y-8">
        <HelpSearch />
        <HelpCategories />
        <FaqAccordion />
      </div>
    </div>
  );
}