import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeCatch from "@/components/WhatWeCatch";
import SupportAgentDemo from "@/components/SupportAgentDemo";
import TechStack from "@/components/TechStack";
import ComparisonSection from "@/components/ComparisonSection";

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
        <WhatWeCatch />
        <SupportAgentDemo />
        <TechStack />
        <ComparisonSection />
      
        {/* Footer */}
        <footer className="border-t border-border py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Docs
                </a>
                <a 
                  href="https://github.com/inkog-io/inkog" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About
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
