import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Developer",
    price: "Free",
    period: "",
    description: "Perfect for individual developers",
    features: [
      "1,000 scans/month",
      "Basic risk detection",
      "GitHub integration",
      "Community support",
      "7-day scan history"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Team",
    price: "$497",
    period: "/month",
    description: "For growing engineering teams",
    features: [
      "Unlimited scans",
      "Advanced risk detection",
      "API access",
      "Priority support",
      "90-day scan history",
      "Custom risk rules",
      "Slack integration"
    ],
    cta: "Start Trial",
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
      "Unlimited scan history",
      "Custom integrations",
      "On-premise deployment"
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-card rounded-lg p-8 border ${
                tier.popular 
                  ? 'border-foreground' 
                  : 'border-border'
              }`}
            >
              {tier.popular && (
                <div className="text-xs font-semibold text-muted-foreground mb-4">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-foreground flex-shrink-0 mt-0.5" />
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
