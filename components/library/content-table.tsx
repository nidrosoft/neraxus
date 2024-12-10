"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const articles = [
  { date: "10:14 AM, 07 Nov 24", type: "Prompt to Article", title: "Designing an AI tool for the UI8 Marketplace involves underst...", status: "Success" },
  { date: "12:10 AM, 06 Nov 24", type: "Image to Article", title: "Top Digital Marketing Trends to Watch This Year", status: "Success" },
  { date: "08:35 AM, 05 Nov 24", type: "Weblink to Article", title: "Designing an AI tool for the UI8 Marketplace involves underst...", status: "Success" },
  { date: "09:48 PM, 04 Nov 24", type: "Document to Article", title: "How to Create an Effective Email Marketing Campaign from Scratch", status: "Success" },
  { date: "10:14 PM, 03 Nov 24", type: "Audio to Article", title: "Top Digital Marketing Trends to Watch This Year", status: "Success" },
  { date: "11:34 AM, 02 Nov 24", type: "Prompt to Article", title: "How to Create an Effective Email Marketing Campaign from Scratch", status: "Success" },
  { date: "12:58 PM, 01 Nov 24", type: "Video to Article", title: "Designing an AI tool for the UI8 Marketplace involves underst...", status: "Success" }
];

export function ContentTable() {
  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm">Select</span>
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              className="pl-10 w-[300px]"
              placeholder="Search here"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Post Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Titles</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">View Details</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 text-sm">{article.date}</td>
                  <td className="py-3 px-4 text-sm">{article.type}</td>
                  <td className="py-3 px-4 text-sm">{article.title}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                      {article.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <Button variant="outline" className="text-purple-600">
            First
          </Button>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((page) => (
              <Button key={page} variant="outline" className="w-8 h-8 p-0">
                {page}
              </Button>
            ))}
          </div>
          <Button variant="outline" className="text-purple-600">
            Last
          </Button>
        </div>
      </div>
    </Card>
  );
}