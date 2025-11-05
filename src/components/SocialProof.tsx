import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="mb-6">
              As seen on Hacker News
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              Trusted by Security-First Teams
            </h2>
            <p className="text-muted-foreground">
              From early-stage startups to Fortune 500 companies
            </p>
          </motion.div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              From the team that discovered CVE-2024-XXXX in LangChain
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="https://github.com/inkog-io/inkog" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                View on GitHub
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                Read Technical Blog
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="w-4 h-4" />
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
