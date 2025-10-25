import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Radar, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Github,
    title: "Connect your repo",
    description: "Integrate with GitHub in seconds. No code leaves our servers—analysis happens in ephemeral containers.",
    color: "accent"
  },
  {
    icon: Radar,
    title: "Inkog scans for 50+ risk patterns",
    description: "Our engine detects prompt injection, infinite loops, data exfiltration, and more with 96% accuracy.",
    color: "warning"
  },
  {
    icon: FileCheck,
    title: "Get risk score + compliance report",
    description: "Receive actionable insights and EU AI Act compliance documentation instantly.",
    color: "accent"
  }
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Integrated into your CI/CD in under 5 minutes
          </p>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center ${
                    step.color === 'accent' ? 'bg-accent/10 border-2 border-accent' : 'bg-warning/10 border-2 border-warning'
                  }`}
                >
                  <step.icon className={`w-10 h-10 ${step.color === 'accent' ? 'text-accent' : 'text-warning'}`} />
                </motion.div>

                {/* Content */}
                <div className="flex-1 bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      step.color === 'accent' ? 'bg-accent/20 text-accent' : 'bg-warning/20 text-warning'
                    }`}>
                      Step {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  className="hidden md:block absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-accent to-warning origin-top"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-card border border-accent/30 rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <div className="text-muted-foreground mb-2"># .github/workflows/security.yml</div>
            <pre className="text-accent">
{`- name: Inkog Security Scan
  uses: inkog/scan-action@v1
  with:
    api_key: \${{ secrets.INKOG_API_KEY }}
    fail_on: high  # Block deployment on high-risk findings`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
