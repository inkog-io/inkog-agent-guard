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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Enterprise-Grade Security Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From the team that discovered critical vulnerabilities in major AI systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all hover:glow-accent cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
              >
                <feature.icon className="w-7 h-7 text-accent" />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
