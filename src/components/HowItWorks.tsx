import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            See Vulnerabilities Before They Ship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Install once, protect forever
          </p>
        </motion.div>

        {/* Terminal output */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
              <Terminal className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">Terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-muted-foreground mb-1">$ inkog scan ./agent.py</div>
              <div className="space-y-2 mt-4">
                <div className="flex items-start gap-2">
                  <span className="text-warning">⚠</span>
                  <div>
                    <span className="text-warning font-semibold">MEDIUM:</span>
                    <span className="text-foreground ml-2">Potential prompt injection at line 34</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-destructive">✗</span>
                  <div>
                    <span className="text-destructive font-semibold">HIGH:</span>
                    <span className="text-foreground ml-2">Infinite loop detected at line 67</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground">No API keys exposed</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-foreground">Risk Score: <span className="text-warning font-bold">73/100</span></div>
                  <div className="text-muted-foreground mt-1">
                    Full report: <span className="text-accent">https://app.inkog.ai/scan/a4f2c</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
