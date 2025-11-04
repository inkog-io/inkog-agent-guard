import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const comparison = [
  { feature: "Detection method", inkog: "Static analysis", runtime: "Runtime monitoring" },
  { feature: "Deployment blocker", inkog: "Yes", runtime: "No" },
  { feature: "Cost per month", inkog: "$497", runtime: "$5,000+" },
  { feature: "False positives", inkog: "4%", runtime: "15-20%" },
];

const tiers = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "For public repositories",
    features: [
      "Unlimited scans",
      "Core pattern detection",
      "GitHub integration",
      "Community support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Team",
    price: "$497",
    period: "/month",
    description: "For private repositories",
    features: [
      "Everything in Open Source",
      "Private repo scanning",
      "Advanced patterns (50+)",
      "Priority support",
      "API access",
      "Custom rules"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations at scale",
    features: [
      "Everything in Team",
      "EU AI Act compliance reports",
      "Dedicated support engineer",
      "SLA guarantees",
      "On-premise deployment",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
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
            10x Cheaper Than Runtime Monitors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Catch vulnerabilities before deployment, not after incidents
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-border bg-muted/30">
              <div className="text-sm font-medium">Feature</div>
              <div className="text-sm font-medium text-center">Inkog</div>
              <div className="text-sm font-medium text-center text-muted-foreground">Runtime Monitors</div>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-b-0">
                <div className="text-sm text-muted-foreground">{row.feature}</div>
                <div className="text-sm font-medium text-center text-accent">{row.inkog}</div>
                <div className="text-sm text-center text-muted-foreground">{row.runtime}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-6 border ${
                tier.popular 
                  ? 'border-accent' 
                  : 'border-border'
              }`}
            >
              {tier.popular && (
                <div className="text-xs font-semibold text-accent mb-4">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
