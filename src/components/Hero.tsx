import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Lock } from "lucide-react";
import heroVisualization from "@/assets/hero-visualization.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-90" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              {["SOC 2 Type II", "OWASP Compatible", "EU AI Act Ready"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Ship AI Agents{" "}
              <span className="text-gradient">Without Fear</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Detect infinite loops, data leaks, and behavioral risks before your AI agents reach production
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="text-lg px-8 py-6 glow-accent bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Start Free Scan
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-accent/50 hover:bg-accent/10">
                View Live Demo
              </Button>
            </div>
          </motion.div>

          {/* Hero visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-accent/30 glow-accent">
              <img 
                src={heroVisualization} 
                alt="AI Agent Security Visualization"
                className="w-full h-auto"
              />
              
              {/* Animated scanning overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "linear"
                }}
              />

              {/* Risk indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-4 right-4 bg-warning/90 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Shield className="w-5 h-5" />
                <span className="font-semibold">3 Risks Detected</span>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-8 -left-8 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-accent/30"
            >
              <Lock className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
