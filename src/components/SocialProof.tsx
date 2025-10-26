import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Inkog caught 3 critical vulnerabilities before our AI agent launch. Saved us from a potential data breach.",
    author: "Sarah Chen",
    role: "VP Engineering at TechCorp"
  },
  {
    quote: "The EU AI Act compliance reports alone are worth the price. Our legal team loves it.",
    author: "Marcus Rodriguez",
    role: "CTO at FinanceAI"
  },
  {
    quote: "Integrated in 3 minutes. First scan revealed an infinite loop we missed in code review. Mind blown.",
    author: "Priya Patel",
    role: "Lead Developer at StartupXYZ"
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40">
            {["Company A", "Company B", "Company C", "Company D"].map((company, i) => (
              <div key={i} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6"
            >
              <p className="text-sm mb-4">{testimonial.quote}</p>
              <div>
                <div className="text-sm font-semibold">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
