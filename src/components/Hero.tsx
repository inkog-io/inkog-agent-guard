import { Button } from "@/components/ui/button";
import BookCta from "@/components/BookCta";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
            Static Analysis for AI Agents
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Catch prompt injection, data leaks and more <span className="font-semibold text-foreground">before production</span>.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <BookCta 
            text="Book 15-min Demo" 
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>

        {/* Code Example */}
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
            <code className="font-mono text-sm text-primary">
              npx @inkog/scanner scan ./agent.py
            </code>
          </div>
          <p className="text-sm text-muted-foreground">
            15+ vulnerability patterns. Zero false positives. 5-second scan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
