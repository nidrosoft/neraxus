import { features } from "@/config/features";
import { FeatureCard } from "@/components/dashboard/feature-card";
import { HeroSection } from "@/components/dashboard/hero-section";
import { MostUsedSection } from "@/components/dashboard/most-used-section";

export default function DashboardPage() {
  return (
    <div className="h-full p-4 space-y-8">
      <HeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>

      <MostUsedSection />
    </div>
  );
}