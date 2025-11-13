import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeCatch from "@/components/WhatWeCatch";
import TechStack from "@/components/TechStack";
import ProofSection from "@/components/ProofSection";
import ComparisonSection from "@/components/ComparisonSection";
import Pricing from "@/components/Pricing";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <div className="py-32">
          <WhatWeCatch />
        </div>
        <div className="py-32">
          <TechStack />
        </div>
        <div className="py-32">
          <ProofSection />
        </div>
        <div className="py-32">
          <ComparisonSection />
        </div>
        <div className="py-32">
          <Pricing />
        </div>
      
        {/* Footer */}
        <footer className="border-t border-border py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Docs
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                inkog
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
