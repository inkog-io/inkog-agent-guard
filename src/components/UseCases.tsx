import { motion } from "framer-motion";
import { Code2, Shield, DollarSign, Users } from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Engineering Teams",
    benefits: [
      "Catch vulnerabilities in CI/CD before production",
      "Prevent infinite loops that drain GPU credits",
      "Ensure secure API key handling"
    ]
  },
  {
    icon: Shield,
    title: "Security Teams",
    benefits: [
      "EU AI Act compliance documentation",
      "OWASP Top 10 for LLMs coverage",
      "Pre-deployment risk assessment"
    ]
  },
  {
    icon: DollarSign,
    title: "Finance & Operations",
    benefits: [
      "Predict agent costs before deployment",
      "Prevent $100K+ billing surprises",
      "Budget approval documentation"
    ]
  },
  {
    icon: Users,
    title: "HR & Support Teams",
    benefits: [
      "Validate chatbot safety before customer interaction",
      "Ensure PII handling compliance",
      "Prevent inappropriate responses"
    ]
  }
];

const UseCases = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Built for Every Team Deploying AI
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
