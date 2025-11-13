import { Button } from "@/components/ui/button";
import BookCta from "@/components/BookCta";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Headline */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Find AI agent bugs before they cause problems
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Static analysis that catches issues
          </p>
        </div>

        {/* Code Example */}
        <div className="bg-card border border-border rounded-lg p-8 max-w-xl mx-auto">
          <code className="font-mono text-base md:text-lg text-foreground">
            npx @inkog/scanner scan ./
          </code>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <BookCta 
            text="Book Demo" 
            size="lg"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
