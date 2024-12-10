"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItemProps {
  children: React.ReactNode;
  className?: string;
}

const BreadcrumbItem = ({ children, className }: BreadcrumbItemProps) => {
  return (
    <li className={cn("inline-flex items-center", className)}>
      {children}
    </li>
  );
};

interface BreadcrumbProps {
  children: React.ReactNode;
  className?: string;
}

const BreadcrumbRoot = ({ children, className }: BreadcrumbProps) => {
  const items = React.Children.toArray(children);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("inline-flex items-center space-x-1 md:space-x-2", className)}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
            {item}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
});