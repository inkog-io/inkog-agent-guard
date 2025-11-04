import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, ExternalLink, Star } from "lucide-react";
import { useState } from "react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
              Start Scanning in 5 Minutes
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Install the GitHub Action or try our live demo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                Install GitHub Action
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 text-accent" />
              <a 
                href="https://github.com/inkog-io/scanner" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Star us on GitHub
              </a>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-accent/10 border border-accent rounded-lg"
              >
                <p className="text-sm text-accent">
                  Thanks! Check your inbox for setup instructions.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
