import { motion } from "framer-motion";
import { Terminal, Play } from "lucide-react";

const LiveDemo = () => {
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
            See It In Action
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-card border border-border rounded-lg overflow-hidden"
          >
            {/* Demo video placeholder */}
            <div className="relative aspect-video bg-background flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
                <p className="text-muted-foreground text-sm">Demo video coming soon</p>
              </div>
            </div>

            {/* Terminal output example */}
            <div className="p-6 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">Live scan output</span>
              </div>
              <pre className="text-xs font-mono text-foreground bg-background rounded p-4 overflow-x-auto">
{`$ inkog scan agent.py

Analyzing agent code...
⚠ MEDIUM: Potential prompt injection at line 34
✗ HIGH: Infinite loop detected at line 67
✓ No API keys exposed
✓ Rate limiting configured

Risk Score: 73/100
Full report: https://app.inkog.ai/scan/a4f2c

3 vulnerabilities found, 2 require immediate attention`}
              </pre>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-2">Try it yourself:</p>
            <code className="text-sm font-mono bg-card border border-border px-4 py-2 rounded-lg inline-block">
              npx inkog scan
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
