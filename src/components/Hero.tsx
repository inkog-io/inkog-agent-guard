import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroVisualization from "@/assets/hero-visualization.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["SOC 2 Type II", "OWASP Compatible", "EU AI Act Ready"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs font-medium text-muted-foreground">{badge}</span>
                </div>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Ship AI Agents Without Fear
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Detect infinite loops, data leaks, and behavioral risks before your AI agents reach production
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-20">
              <Button size="lg" className="text-base">
                Start Free Scan
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                View Live Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-border">
              <img 
                src={heroVisualization} 
                alt="AI Agent Security Visualization"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
