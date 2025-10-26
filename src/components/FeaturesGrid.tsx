import { motion } from "framer-motion";
import { Shield, Bug, FileText, Github, Target, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Pre-deployment Risk Scoring",
    description: "Comprehensive behavioral analysis before your agents go live"
  },
  {
    icon: Bug,
    title: "OWASP Top 10 LLM Detection",
    description: "Automatically identify critical vulnerabilities in AI systems"
  },
  {
    icon: FileText,
    title: "EU AI Act Compliance",
    description: "Generate audit-ready compliance reports instantly"
  },
  {
    icon: Github,
    title: "GitHub Actions Integration",
    description: "Seamless CI/CD pipeline integration with zero config"
  },
  {
    icon: Target,
    title: "96% Accuracy on Known Patterns",
    description: "Industry-leading detection powered by ML research"
  },
  {
    icon: RefreshCw,
    title: "Real-time Pattern Updates",
    description: "Stay protected against emerging threats automatically"
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Enterprise-Grade Security Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the team that discovered critical vulnerabilities in major AI systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover-lift"
            >
              <div className="w-10 h-10 rounded-md bg-muted flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-foreground" />
              </div>
              
              <h3 className="text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
