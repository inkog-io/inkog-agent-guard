import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";
import { useEffect, useState } from "react";
import BookCta from "@/components/BookCta";

const Hero = () => {
  const [scansCount, setScansCount] = useState(12487);

  useEffect(() => {
    const interval = setInterval(() => {
      setScansCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {/* Trust metrics */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary" />
                <span>5,234 GitHub stars</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-mono text-foreground">{scansCount.toLocaleString()}</span>
                <span>agents scanned this week</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Your AI Agents Are One Prompt Away From Disaster
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Catch AI agent vulnerabilities before production. 96% accuracy on OWASP Top 10 for LLMs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Button size="lg" className="text-base gap-2">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-base gap-2"
                asChild
              >
                <a 
                  href="https://github.com/inkog-io/inkog" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  Star on GitHub
                </a>
              </Button>
              <BookCta 
                variant="outline" 
                className="text-base gap-2"
                utm="utm_source=website&utm_medium=hero&utm_campaign=home"
              />
            </div>
            <p className="text-xs text-muted-foreground mb-16">
              Free 15-minute consultation • First 10 companies only
            </p>
          </motion.div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="code-block">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground"># .github/workflows/security.yml</span>
                <button className="text-xs text-primary hover:text-primary/80 transition-colors">
                  Copy
                </button>
              </div>
              <pre className="text-foreground text-sm">
{`- uses: inkog-io/scanner@v1
  with:
    fail_on: high  # Block PRs with high-risk patterns`}
              </pre>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                SOC 2 Type II • OWASP Compatible • EU AI Act Ready
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
