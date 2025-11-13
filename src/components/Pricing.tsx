import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    deployment: "On-prem only",
    features: [
      "CLI scanner",
      "All patterns",
      "GitHub Action"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Team",
    price: "Starts at $99",
    period: "",
    description: "Everything in Open Source",
    deployment: "SaaS or On-prem",
    features: [
      "Admin GUI",
      "API access",
      "Priority support"
    ],
    cta: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Everything in Team",
    deployment: "SaaS or On-prem",
    features: [
      "Custom patterns",
      "Automatic Compliance reports",
      "Support SLA + Success Manager"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
            Pricing
          </h2>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card rounded-lg p-6 border flex flex-col ${
                tier.popular 
                  ? 'border-primary shadow-lg' 
                  : 'border-border'
              }`}
            >
              <div className="h-6 mb-4">
                {tier.popular && (
                  <div className="text-xs font-semibold text-primary">
                    MOST POPULAR
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground text-sm">{tier.period}</span>}
                </div>
                {tier.description && (
                  <p className="text-sm text-muted-foreground mb-1">{tier.description}</p>
                )}
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="flex-1">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.deployment && (
                <p className="text-xs text-muted-foreground mb-4">{tier.deployment}</p>
              )}

              <Button 
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
