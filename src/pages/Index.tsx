import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import RiskPatterns from "@/components/RiskPatterns";
import SocialProof from "@/components/SocialProof";
import Pricing from "@/components/Pricing";
import Waitlist from "@/components/Waitlist";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <HowItWorks />
      <FeaturesGrid />
      <RiskPatterns />
      <SocialProof />
      <Pricing />
      <Waitlist />
      
      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold">Inkog</div>
            <div className="text-sm text-muted-foreground">
              © 2025 Inkog. Ship AI agents without fear.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
