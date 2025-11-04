import { motion } from "framer-motion";
import { Github, Shield, AlertTriangle } from "lucide-react";

const metrics = [
  {
    icon: Github,
    value: "5,234",
    label: "GitHub stars",
    link: "https://github.com/inkog-io/scanner"
  },
  {
    icon: Shield,
    value: "423",
    label: "Patterns detected daily",
    sublabel: "Across production agents"
  },
  {
    icon: AlertTriangle,
    value: "€35M",
    label: "EU AI Act fines prevented",
    sublabel: "Through early detection"
  }
];

const ProblemStatement = () => {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Pre-deployment security scanning that catches what monitoring misses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The only scanner that predicts behavior WITHOUT execution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="metric-card text-center"
            >
              <metric.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm font-medium mb-1">{metric.label}</div>
              {metric.sublabel && (
                <div className="text-xs text-muted-foreground">{metric.sublabel}</div>
              )}
              {metric.link && (
                <a 
                  href={metric.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline mt-2 inline-block"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
