import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Inkog caught 3 critical vulnerabilities before our AI agent launch. Saved us from a potential data breach.",
    author: "Sarah Chen",
    role: "VP Engineering at TechCorp",
    company: "TechCorp"
  },
  {
    quote: "The EU AI Act compliance reports alone are worth the price. Our legal team loves it.",
    author: "Marcus Rodriguez",
    role: "CTO at FinanceAI",
    company: "FinanceAI"
  },
  {
    quote: "Integrated in 3 minutes. First scan revealed an infinite loop we missed in code review. Mind blown.",
    author: "Priya Patel",
    role: "Lead Developer at StartupXYZ",
    company: "StartupXYZ"
  }
];

const SocialProof = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-lg mb-8">
            Trusted by developers at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {["Company A", "Company B", "Company C", "Company D"].map((company, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-2xl font-bold"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all"
            >
              <div className="text-4xl mb-4 text-accent">"</div>
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div>
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
