import { motion } from "framer-motion";

const patterns = [
  {
    title: "Prompt Injection",
    severity: "HIGH",
    description: "Detects when user input can manipulate system prompts"
  },
  {
    title: "Infinite Loop",
    severity: "HIGH",
    description: "Catches recursive agent calls without termination"
  },
  {
    title: "Data Exfiltration",
    severity: "CRITICAL",
    description: "Identifies unauthorized data transmission patterns"
  },
  {
    title: "Excessive API Usage",
    severity: "MEDIUM",
    description: "Prevents runaway costs from uncontrolled LLM calls"
  },
  {
    title: "PII Leakage",
    severity: "CRITICAL",
    description: "Ensures sensitive data doesn't leave your system"
  },
  {
    title: "Tool Access Control",
    severity: "HIGH",
    description: "Validates agent permissions to execute commands"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Real Patterns We Detect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From the team that discovered CVE-2024-XXXX in LangChain
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {patterns.map((pattern, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-sm">{pattern.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  pattern.severity === 'CRITICAL' 
                    ? 'bg-destructive/10 text-destructive' 
                    : pattern.severity === 'HIGH'
                    ? 'bg-warning/10 text-warning'
                    : 'bg-primary/10 text-primary'
                }`}>
                  {pattern.severity}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{pattern.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-sm text-primary hover:underline">
            See all patterns in documentation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
