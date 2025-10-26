import { motion } from "framer-motion";
import { Github, Radar, FileCheck } from "lucide-react";

const steps = [
  {
    icon: Github,
    title: "Connect your repo",
    description: "Integrate with GitHub in seconds. No code leaves our servers—analysis happens in ephemeral containers."
  },
  {
    icon: Radar,
    title: "Inkog scans for 50+ risk patterns",
    description: "Our engine detects prompt injection, infinite loops, data exfiltration, and more with 96% accuracy."
  },
  {
    icon: FileCheck,
    title: "Get risk score + compliance report",
    description: "Receive actionable insights and EU AI Act compliance documentation instantly."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrated into your CI/CD in under 5 minutes
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center">
                <step.icon className="w-6 h-6 text-foreground" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    STEP {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="text-muted-foreground text-xs mb-3"># .github/workflows/security.yml</div>
            <pre className="text-foreground">
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
