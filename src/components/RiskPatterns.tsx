import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const detectedIssues = [
  {
    pattern: "Unrestricted Tool Access",
    severity: "HIGH",
    location: "agent_executor.py:L45",
    description: "Agent can execute arbitrary shell commands without validation",
    link: "/docs/patterns/unrestricted-tool-access"
  },
  {
    pattern: "Missing Rate Limiting",
    severity: "MEDIUM",
    location: "api_handler.py:L23",
    description: "No throttling on LLM API calls - potential cost overflow",
    link: "/docs/patterns/rate-limiting"
  },
  {
    pattern: "Hardcoded API Keys",
    severity: "CRITICAL",
    location: "config.py:L12",
    description: "OpenAI key exposed in source code",
    link: "/docs/patterns/api-key-exposure"
  },
  {
    pattern: "Prompt Template Injection",
    severity: "HIGH",
    location: "prompt_builder.py:L34",
    description: "User input concatenated without sanitization",
    link: "/docs/patterns/prompt-injection"
  }
];

const RiskPatterns = () => {
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
            Actual Issues Detected in Production Agents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real vulnerabilities caught before deployment (company names redacted)
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {detectedIssues.map((issue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-sm">{issue.pattern}</h3>
                    <Badge 
                      variant={
                        issue.severity === "CRITICAL" ? "destructive" : 
                        issue.severity === "HIGH" ? "default" : 
                        "secondary"
                      }
                      className="text-xs"
                    >
                      {issue.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{issue.description}</p>
                  <p className="text-xs font-mono text-muted-foreground">{issue.location}</p>
                </div>
              </div>
              <a 
                href={issue.link}
                className="text-xs text-accent hover:underline"
              >
                View pattern documentation →
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-sm text-accent hover:underline">
            Request a custom pattern for your use case →
          </button>
        </div>
      </div>
    </section>
  );
};

export default RiskPatterns;
