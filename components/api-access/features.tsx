"use client";

import Image from "next/image";

export function ApiFeatures() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-purple-50/50 dark:bg-purple-900/10 rounded-3xl" />
      <div className="relative p-8">
        <div className="flex justify-center">
          <Image
            src="/images/api-img.png"
            alt="API Illustration"
            width={800}
            height={600}
            className="w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}