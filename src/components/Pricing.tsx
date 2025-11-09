import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const tiers = [
  {
    name: "Open Source",
    price: "Free",
    period: "forever",
    description: "On-prem only",
    features: [
      "CLI scanner",
      "All patterns",
      "GitHub Action",
      "Community support"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Team",
    price: "$99",
    period: "/month per production agent",
    description: "Everything in Open Source",
    features: [
      "1 Agentic Framework Integration*",
      "SaaS + Admin GUI Available",
      "Priority support",
      "API access",
      "90-day history"
    ],
    cta: "Start Free Trial",
    popular: true,
    tooltip: "Agentic Framework Integration to LangChain, CrewAI, AutoGen, etc."
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Everything in Team",
    features: [
      "3 Agentic Framework Integrations*",
      "Custom patterns",
      "On-premise deployment",
      "Support SLA + Success Manager",
      "Automatic Compliance reports"
    ],
    cta: "Contact Sales",
    popular: false,
    tooltip: "Agentic Framework Integration to LangChain, CrewAI, AutoGen, etc."
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
              className={`bg-card rounded-lg p-6 border ${
                tier.popular 
                  ? 'border-primary shadow-lg' 
                  : 'border-border'
              }`}
            >
              {tier.popular && (
                <div className="text-xs font-semibold text-primary mb-4">
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

              <TooltipProvider>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="flex-1">
                        {feature}
                        {feature.includes('*') && tier.tooltip && (
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="text-primary cursor-help ml-1">*</span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{tier.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </TooltipProvider>

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
